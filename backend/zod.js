const zod = require('zod');


const CreateTodo = zod.object({
    title: zod.string(),
    description : zod.string(),
    completed : zod.boolean
});

const updateid = zod.object({
    id : zod.string()
})

module.exports = {
    CreateTodo : CreateTodo,
    updateid : updateid
}