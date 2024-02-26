const express = require('express');
const app = express();
const { CreateTodo } = require('./zod');
const { updateid } = require('./zod');
const { todos } = require('./database/index')
const cors = require('cors')

app.use(express.json());
app.use(cors({}))

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

app.put('/todo', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateid.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(400).send(parsedPayload.error);
        return;
    }

    const ans = await todos.updateOne(
        { _id: req.body.id },  // Filter by document ID
        { completed: true }    // Update operation: Set the status to "active"
    );

    if(ans){
        res.send("todo is updated");
    }
    else{
        res.send("some error")
    }
});



app.listen(3000, () => {"Server is running on port 3000"});