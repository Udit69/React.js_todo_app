const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => { 
    res.send("Hello World");
})

app.post('/todos', (req, res) => {

})

app.get('/todo',(req,res) =>{


})

app.put('/completed',(req,res) => {
    
})


app.listen(3000, () => {"Server is running on port 3000"});