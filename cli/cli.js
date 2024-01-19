#!/usr/bin/env node

const program = require('commander');
const TaskManager = require('./tasks');

// Crear una instancia de TaskManager
const taskManager = new TaskManager();

program
    .version('1.0.0')
    .description('Gestor de tareas CLI');

program
    .command('add <task>')
    .description('Agregar una nueva tarea')
    .action((task) => {
        taskManager.addTask(task);
        console.log(`Tarea agregada: ${task}`);
    });

program
    .command('list')
    .description('Listar todas las tareas')
    .action(() => {
        const tasks = taskManager.getTasks();
        if (tasks.length > 0) {
            console.log('Lista de tareas:');
            tasks.forEach(task => console.log(`- ${task}`));
        } else {
            console.log('No hay tareas.');
        }
    });

program
    .command('remove <task>')
    .description('Eliminar una tarea')
    .action((task) => {
        if (taskManager.removeTask(task)) {
            console.log(`Tarea eliminada: ${task}`);
        } else {
            console.log(`La tarea "${task}" no existe.`);
        }
    });

program.parse(process.argv);
