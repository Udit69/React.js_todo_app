import mongoose from "mongoose";

mongoose.connect('mongodb+srv://udit12:qQsInrNsnpk7zCBo@cluster0.nglp1df.mongodb.net/todo');

const CreateTodo = new mongoose.Schema({
    title: string,
    description : string,
    completed : Boolean
})


const todos = mongoose.model('todos',CreateTodo);


module.exports = {
    todos
}