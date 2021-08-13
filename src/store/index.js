import Vue from 'vue'
import Vuex from 'vuex'
import { API } from '@/api.js'
import router from "../router";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
        selectedTodo: {
            item: "",
            isDone: true,
            dueToDate: "",
            details: "",
        }
    },
    mutations: {
        updateTodos(state, payload) {
            state.todos = payload;
        },
        updateSelectedTodo(state, payload) {
            state.selectedTodo = payload;
        }
    },
    actions: {
        apiFetchTodoItems({ commit }) {
            const dateFormat = (value) => {

                const defultDate = new Date(value);

                const month = (defultDate.getMonth() + 1).toString().padStart(2, "0");
                const date = defultDate.getDate().toString().padStart(2, "0");
                const fullYear = defultDate.getFullYear();

                return `${fullYear}/${month}/${date}`;
            }
            API.fetchTodoItems()
                .then(res => {
                    let { data } = res;
                    let i = res.data.length;
                    for (i >= 0; i--;) {
                        data[i].dueToDate = dateFormat(data[i].dueToDate)
                    }
                    commit('updateTodos', res.data);
                });

        },
        switchTodoItemsChecked({ commit, state }, newTodo) {
            let { todos } = state;
            let i = todos.length;
            for (i >= 0; i--;) {
                if (todos[i].id === newTodo.id) {
                    todos[i].isDone = !todos[i].isDone;
                }
            }
            commit('updateTodos', todos);
            API.updateTodoItemsId(newTodo.id, newTodo);
        },
        setSelectedTodo({ commit }, selectedTodo) {
            commit('updateSelectedTodo', selectedTodo)
        },
        setUpdateTodo({ commit, state }, selectedTodo) {
            let { todos } = state;
            let i = todos.length;

            for (i >= 0; i--;) {
                if (todos[i].id === selectedTodo.id) {
                    todos[i] = selectedTodo;
                }
            }
            commit('updateTodos', todos);
            API.updateTodoItemsId(selectedTodo.id, selectedTodo).then(() => {
                alert("Updated");
                router.push("/");
            });
        },
        setNewAddTodo({ dispatch }, selectedTodo) {
            API.addTodoItems(selectedTodo).then(() => {
                dispatch('apiFetchTodoItems').then(() => {
                    alert("Added todo");
                    router.push("/");
                });
            });

        },
        setDeleteTodoItemsId({ commit, state }, id) {
            let { todos } = state;
            // let i = todos.length;

            API.deleteTodoItemsId(id).then(() => {
                todos = todos.filter(item => item.id !== id);
                alert("Deleted todo");
                commit('updateTodos', todos);

            });
        }
    },
    modules: {}
})