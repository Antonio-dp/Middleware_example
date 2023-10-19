const {AppError} = require('../utils/appError')
const tasks = [];

const getTasks = (req, res) =>{
    res.status(200).json(tasks);
}

const addTask = (req, res) =>{
    const {nombre, email} = req.body;

    if(!nombre || !email){
        throw new AppError('faltan campos obligatorios ',500)
    }

    const expresionRegular= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    if(!expresionRegular.test(email)){
        throw new AppError('Correo invalido', 500);
    }

    const task = {
        nombre: nombre,
        email: email
    }

    tasks.push(task);
    res.status(200).json(task);
}

const deleteTask = (req, res) =>{
    const index = req.params;
    if(index>=0 && index<tasks.length){
        const deleteTask = tasks.splice(index,1);
        res.status(200).json(deleteTask);
    }else{
        res.status(404).json({error: 'tarea no encontrada'});
    }
}

module.exports={
    getTasks,
    addTask,
    deleteTask
}