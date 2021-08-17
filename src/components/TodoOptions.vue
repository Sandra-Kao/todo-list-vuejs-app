<template>
  <section class="todo-options todo-wrapper">
    <label>Todo *</label>
    <input type="text" placeholder="" v-model="todo.item" />

    <label>Due To Date</label>
    <input type="date" placeholder="" v-model="todo.dueToDate" />

    <label>Details</label>
    <textarea type="text" v-model="todo.details" maxlength="500" />

    <div class="todo-options__action">
      <button class="circle-btn padding-helf margin-helf" @click="goPageHome">
        <i class="fas fa-arrow-left"></i>
      </button>

      <button
        class="circle-btn padding-helf margin-helf"
        @click="submitOptions"
      >
        <i class="far fa-thumbs-up"></i>
      </button>
    </div>
  </section>
</template>

<script>
import $store from "@/store/index.js";
import Vuex from "vuex";
import router from "../router";
export default {
  name: "TodoOptions",
  props: {},
  data() {
    return {
      todo: {
        item: "",
        isDone: false,
        dueToDate: null,
        details: "",
      },
    };
  },
  mounted() {
    if (this.selectedTodo.id) {
      this.todo = this.selectedTodo;
    }
  },
  computed: {
    todos() {
      return $store.state.todos;
    },
    selectedTodo() {
      return $store.state.selectedTodo;
    },
  },
  methods: {
    ...Vuex.mapActions(["setSelectedTodo", "setUpdateTodo", "setNewAddTodo"]),

    $_setRouter(url) {
      router.push(url);
    },
    goPageHome() {
      const clearTodoOptions = {
        item: "",
        isDone: true,
        dueToDate: "",
        details: "",
      };
      this.setSelectedTodo(clearTodoOptions);
      this.$_setRouter("/");
    },
    submitOptions() {
      const { todo } = this;
      if (todo && todo.id !== undefined) {
        //update
        this.setUpdateTodo(todo);
      } else {
        //add
        this.setNewAddTodo(todo);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo-options {
  display: flex;
  flex-direction: column;
}
.todo-options label {
  margin-top: 1rem;
  padding: 1rem 0;
  font-size: 1.3rem;
  color: #67a1fa;
  font-weight: 900;
  text-align: left;
  padding-left: 5rem;
}

.todo-options textarea::placeholder,
.todo-options input::placeholder {
  color: var(--color-white);
}

.todo-options textarea,
.todo-options input {
  padding: 1rem 5rem;
  background: var(--color-primary-darker);
  border: transparent;
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: var(--color-white);
}
.todo-options__action {
  display: flex;
  justify-content: center;
}
@media only screen and (max-width: 800px) {
  .todo-wrapper {
    padding: 1rem 1rem;
  }
  .todo-options textarea,
  .todo-options input,
  .todo-options label {
    padding-left: 1rem;    
    padding-right: 1rem;
  }
}
</style>
