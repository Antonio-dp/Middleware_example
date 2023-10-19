const express = require('express')
const {AppError, globalErrorHandler} = require('./utils/appError')
const app = express();
require('dotenv').config({path: './variables.env'})
const tasksRoutes = require('./routes/tasksRoutes')
const morgan = require('morgan');
const { error } = require('winston');

app.use(express.json());

//middleware para configurar el registro de solicitudes http
app.use(morgan('combined'))

app.use('/api/tasks', tasksRoutes);

app.all('*', (req, res, next)=>{
    throw new AppError('La ruta no se ha encontrado o ha cambiado', 300);
    next(error);
})

app.use(globalErrorHandler); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Servidor Express escuchando en el puerto '+PORT);
});

