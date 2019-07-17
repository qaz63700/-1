let todoId =0;
export const addTodo=(content)=>({
    type:'ADD_TODO',
    content,
    id:todoId++
})