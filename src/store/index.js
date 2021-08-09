import Vue from 'vue'
import Vuex from 'vuex'
import {TODO} from '@/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
      "id": 1,
      "item": "Draw mock-up",
      "isDone": true,
      "dueToDate": null,
      "details": ""

    },
    {
      "id": 2,
      "item": "UI/UX design",
      "isDone": false,
      "dueToDate": null,
      "details": ""
    },
    {
      "id": 3,
      "item": "Write HTML and CSS",
      "isDone": false,
      "dueToDate": null,
      "details": ""
    }]
  },
  mutations: {
    updateTodos(state, payload) {
      state.todos = payload;
    }
  },
  actions: {
    setTodos(commit, payload) {
      TODO.updateTodoItemsId(payload.id, payload)
        .then(()=>{
        console.log('updateTodoItemsId', '200')
      });
      // commit('updateTodos', payload);
    }
  },
  modules: {
  }
})
