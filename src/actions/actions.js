function addTodo(message) {
    return {
        type: 'ADD_TODO',
        message: message,
        completed: false
    };
}

function completeTodo(index) {
    return {
        type: 'COMPLETE_TODO',
        index: index
    };
}

function deleteTodo(index) {
    return {
        type: 'DELETE_TODO',
        index: index
    };
}

function clearTodo() {
    return {
        type: 'CLEAR_TODO'
    };
}

 const actions= {
    addTodo: addTodo,
    completeTodo: completeTodo,
    deleteTodo: deleteTodo,
    clearTodo: clearTodo
};


export  default actions;