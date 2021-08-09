<template>
  <section class="todo-options todo-wrapper">
    <label>Todo *</label>
    <input type="text" placeholder="" :value="todo.item" />

    <label>Due To Date</label>
    <input type="date" placeholder="" :value="todo.dueToDate" />

    <label>Details</label>
    <textarea type="text" :value="todo.details" maxlength="500" />

    <div class="todo-options__action">

      <div class="padding-helf">
        <button class="circle-btn">
          <i class="fas fa-arrow-left"></i>
        </button>
      </div>

      <router-link to="/" class="padding-helf">
        <button class="circle-btn padding-helf">
          <i class="far fa-thumbs-up"></i>
        </button>
      </router-link>

    </div>
  </section>
</template>

<script>
import $store from "@/store/index.js";
export default {
  name: "TodoOptions",
  props: {},
  data() {
    return {
      todo: {
        item: "",
        isDone: false,
        dueToDate: "",
        details: "",
      },
    };
  },
  mounted() {
  },
  computed: {
    todos() {
      return $store.state.todos;
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
</style>
