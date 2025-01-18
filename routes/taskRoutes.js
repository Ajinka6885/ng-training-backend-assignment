const express = require('express');
   const router = express.Router();
   const Task = require('c:/Users/J1NKs/todo-list-app/models/taskModel');

   // Create a new task
   router.post('/api/task', async (req, res) => {
     const task = new Task(req.body);
     await task.save();
     res.send(task);
   });

   // Retrieve all tasks
   router.get('/api/tasks', async (req, res) => {
     const tasks = await Task.find();
     res.send(tasks);
   });

   // Update a task by ID
   router.put('/api/task/:id', async (req, res) => {
     const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
     res.send(task);
   });

   // Delete a task by ID
   router.delete('/api/task/:id', async (req, res) => {
     await Task.findByIdAndDelete(req.params.id);
     res.send({ message: 'Task deleted' });
   });

   module.exports = router;