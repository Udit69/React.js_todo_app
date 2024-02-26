const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://udit12:qQsInrNsnpk7zCBo@cluster0.nglp1df.mongodb.net/todo');

const CreateTodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todos = mongoose.model('todos', CreateTodoSchema);

module.exports = {
    todos
};
