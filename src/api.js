export const axios = require('axios').default;
export const BASE_URL_TODO = 'https://todo-dotnet-api.azurewebsites.net/api/TodoItems';

export const TODO = {
    addTodoItems: (item) => axios.post(`${BASE_URL_TODO}`, item),
    fetchTodoItems: () => axios.get(`${BASE_URL_TODO}`),
    fetchTodoItemsId: (id) => axios.get(`${BASE_URL_TODO}/${id}`),
    updateTodoItemsId: (id, item) => axios.put(`${BASE_URL_TODO}/${id}`, item),
    deleteTodoItemsId: (id) => axios.delete(`${BASE_URL_TODO}/${id}`),
}