const zod = require('zod');


const CreateTodo = zod.object({
    title: zod.string(),
    description : zod.string(),
});

const updateid = zod.object({
    id : zod.string()
})

module.exports = {
    CreateTodo : CreateTodo,
    updateid : updateid
}