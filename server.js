const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

const taskRoutes = require('./routes/taskRoutes');
app.use(taskRoutes);


mongoose.connect('mongodb://localhost:27017/todo', { useNewUrlParser: true, useUnifiedTopology: true, bufferCommands: false });

mongoose.connection.once('open', () => { console.log('Connected to MongoDB'); app.listen(3000, () => { console.log('Server is running on port 3000'); }); });
//app.listen(3000, () => {
 // console.log('Server is running on port 3000');
//});
