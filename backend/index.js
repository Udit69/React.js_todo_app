const express = require('express');
const app = express();
const { CreateTodo } = require('./zod');
const { updateid } = require('./zod');
const { todos } = require('./database/index')

app.use(express.json());

app.get('/', (req, res) => { 
    res.send("Hello World");
})

app.post('/todos',async (req, res) => {
    const createpayload = req.body;
    const parsedpayload = CreateTodo.safeParse(createpayload);
    if(!parsedpayload.success){
        res.status(400).send(parsedpayload.error);
        return;
    }

    await todos.create({
        title: createpayload.title,
        description : createpayload.description,
        completed : false
    })

    res.send("todo created");
})  

app.get('/todo',async(req,res) =>{
    const tod = await todos.find({})
    if(tod){
        res.send(tod);
    }
    else{
        res.status(401).send("FAILED TO FETCH");
    }
})

app.put('/completed',async(req,res) => {
    const updatepayload = req.body;
    const parsedpayload = updateid.safeParse(updatepayload);
    if(!parsedpayload.success){
        res.status(400).send(parsedpayload.error);
        return;
    }

    await todos.update(
        { _id: updateid.id },  // Filter by document ID
        { $set: { completed: true } }     // Update operation: Set the status to "active"
     )
    
})


app.listen(3000, () => {"Server is running on port 3000"});