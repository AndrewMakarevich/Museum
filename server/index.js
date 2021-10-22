require("dotenv").config();
const express = require('express');
const cors = require('cors');
const sequelize = require("./db");
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();

const models = require('./models/models');
const router = require('./routes/index');
const errorMiddleware = require('./middleware/errorHandlingMiddleware');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "static")));
app.use('/api', router);

app.use(errorMiddleware);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync(models);
        app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};
start();

