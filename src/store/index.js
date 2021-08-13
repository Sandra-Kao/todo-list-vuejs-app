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
            API.fetchTodoItems()
                .then(res => {
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
        }
    },
    modules: {}
})