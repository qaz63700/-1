export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    content: action.content,
                    completed: false
                }
            ];
        default:
            return state;
    }
};