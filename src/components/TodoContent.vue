<template>
  <section>
    <ul class="todo-content__outer-1000 todo-wrapper">
      <li class="todo-content__item-line" v-for="todo in todos" :key="todo.id">
        <i
          class="far fa-circle"
          :class="{ checked: todo.isDone }"
          @click="switchChecked(todo.id)"
        ></i>
        <p
          class="todo-content__item-main padding-helf"
          @click="updateTodoOptions(todo)"
        >
          <span>{{ todo.item }}</span>
          <span class="dueToDate">{{ todo.dueToDate | dateFormat }}</span>
        </p>
        <i class="far fa-trash-alt" @click="deleteTodoOptions(todo.id)"></i>
      </li>
    </ul>

    <div class="todo-content__add-wrapper">
      <router-link to="/newtodo">
        <button class="circle-btn">
          <i class="fas fa-plus"></i>
        </button>
      </router-link>
    </div>
  </section>
</template>

<script>
import Vuex from "vuex";
import router from "../router";
export default {
  name: "TodoContent",
  props: {},
  mounted() {},
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    ...Vuex.mapActions([
      "switchTodoItemsChecked",
      "setSelectedTodo",
      "setDeleteTodoItemsId",
    ]),

    $_setRouter(url) {
      router.push(url);
    },
    switchChecked(id) {
      const newTodo = this.todos.find((todo) => todo.id === id);
      this.switchTodoItemsChecked(newTodo);
    },
    // addTodoOptions() {
    //   this.$_setRouter("/newtodo");
    // },
    updateTodoOptions(todo) {
      this.setSelectedTodo(todo);
      this.$_setRouter("/updatetodo");
    },
    deleteTodoOptions(id) {
      this.setDeleteTodoItemsId(id);
    },
  },
  filters: {
    dateFormat: (value) => {
      if (!value) {
        return null;
      }

      const defultDate = new Date(value);

      const month = (defultDate.getMonth() + 1).toString().padStart(2, "0");
      const date = defultDate.getDate().toString().padStart(2, "0");
      const fullYear = defultDate.getFullYear();

      return `${fullYear}/${month}/${date}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo-content {
  display: flex;
  justify-content: space-around;
}

.todo-content__outer-1000 {
  width: 100%;
  max-width: 1000px;
  // background: var(--color-primary-base);
}

.todo-content h1 {
  font-weight: normal;
  font-size: 2.6rem;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.todo-content h1 span {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
  margin-left: 3px;
  margin-top: 0.2rem;
}

.todo-content__item-line {
  position: relative;
  display: flex;
  text-align: left;
  align-items: center;
  padding: 1rem 5rem;
  background: var(--color-primary-darkest);
  border-radius: 25px;
  margin-bottom: 1rem;
}

.todo-content__item-main {
  display: flex;
  flex-direction: column;
}

.todo-content__item-main .dueToDate {
  margin-top: 1%;
  font-size: 70%;
  color: var(--color-primary-light);
}

.todo-content__item-line p {
  transition: 0.1s ease-out;
  width: 100%;
  margin-right: 1rem;
}

.todo-content__item-line p:hover {
  cursor: pointer;
  color: var(--color-white);
}

.todo-content__item-line p:focus,
.todo-content__item-line p:active {
  color: var(--color-primary-light);
}

.todo-content__item-line i {
  position: relative;
  margin-right: 1rem;
}

.todo-content__item-line i:hover {
  cursor: pointer;
  color: var(--color-white);
}

.todo-content__item-line i:focus,
.todo-content__item-line i:active {
  color: var(--color-primary-light);
}

.todo-content__item-line i::after {
  content: "";
  display: block;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 1rem;
}

.todo-content__item-line i.checked::after {
  content: "\f058";
  display: block;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 1rem;
}

.todo-content__add-input,
.todo-content__add-input i {
  visibility: hidden;
  opacity: 0;
}

.todo-content__add-input.active,
.todo-content__add-input.active i {
  visibility: visible;
  opacity: 1;
}

button.todo-content__add-btn {
  display: block;
  font-size: 1.5rem;
  width: 4rem;
  height: 4rem;
  background: var(--color-spotlight-purple);
  border-radius: 100%;
  color: var(--color-white);
  border: transparent;
}

button.todo-content__add-btn:hover {
  cursor: pointer;
  color: var(--color-white);
}

button.todo-content__add-btn i:focus,
button.todo-content__add-btn i:active {
  color: var(--color-primary-light);
}

@media only screen and (max-width: 800px) {
  .todo-content__item-line {
    padding: 1rem 1rem;
  }
}
</style>
