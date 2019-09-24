let todoId =0;
export const addTodo=(content)=>({
    type:'ADD_TODO',
    content,
    id:todoId++
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});