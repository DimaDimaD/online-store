//Роутер устройств

const Router = require('express');
const router = new Router;
const deviceController = require('../controllers/deviceController');
const checkRole = require("../middleware/checkRoleMiddleware");


router.post('/',checkRole('ADMIN'), deviceController.create); // создание девайса
router.get('/',deviceController.getAll); // получение всех девайсов
router.get('/:id',deviceController.getOne); // получение конкретного девайса

module.exports = router;