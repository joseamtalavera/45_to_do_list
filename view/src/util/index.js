
export const createTodo = async (todo) => {
    try {
        const res = await fetch('/api/todo/create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json', // Added 'Content-Type' header
            }, 
            body: JSON.stringify(todo),
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('Data:', data); // Added console.log to read the value of 'data'
        return data;
    } catch (error){
        console.log('An error occured while creating a todo: ', error);
        throw error;
    }
}

export const getTodos = async () => {
    try {
        const res = await fetch('/api/todos', {
            method: 'GET',
            headers:{
                Accept: 'application/json',
            },
        });
        if (!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('Data:', data);
        return data;
    } catch (error){
        console.log('An error occured while getting todos: ', error);
        throw error;
    }
}


export const removeTodo = async (id) => { // Fixed the arrow function syntax
    try {
        const res = await fetch(`/api/todo/${id}`, {
            method: 'DELETE',
            headers: { 
                Accept: 'application/json',
            },

        });
        if (!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('Data:', data);
        return data;
    } catch (error){
        console.log('An error occured while removing a todo: ', error);
        throw error;
    } 
}