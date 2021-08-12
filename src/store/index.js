import Vue from 'vue'
import Vuex from 'vuex'
import { API } from '@/api.js'

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
        }
    },
    modules: {}
})