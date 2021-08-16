<template>
  <div class="new-todo">
    <TodoOptions></TodoOptions>
  </div>
</template>

<script>
import $store from "@/store/index.js";
import TodoOptions from "@/components/TodoOptions.vue";
export default {
  name: "NewTodo",
  components: {
    TodoOptions,
  },
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
  },
  computed: {
    todos() {
      return $store.state.todos;
    },
  },
};
</script>