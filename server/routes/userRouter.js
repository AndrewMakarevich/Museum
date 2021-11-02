const { Router } = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();
router.get('/all', authMiddleware, userController.getAll);
router.get('/find/:id', userController.getOne);
router.get('/activation/:link', userController.activate);
router.get('/refresh', userController.refreshToken);
router.post('/logout', userController.logout);
router.post('/login', userController.login);
router.post('/registration', userController.registration);

module.exports = router;