const { Router } = require('express');
const userController = require('../controllers/userController');

const router = new Router();
router.get('/all', userController.getAll);
router.get('/:id', userController.getOne);
router.get('/activation/:link', userController.activate);
router.post('/login', userController.login);
router.post('/registration', userController.registration);

module.exports = router;