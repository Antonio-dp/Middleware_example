const express= require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController')

//ruta para obtener todas las tareas
router.get('/', tasksController.getTasks)

//ruta para agregar una tarea
router.post('/', tasksController.addTask)

//ruta para eliminar una tarea
router.delete('/:index', tasksController.deleteTask)

module.exports = router;