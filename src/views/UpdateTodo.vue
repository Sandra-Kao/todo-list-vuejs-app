<template>
  <div class="update-todo">
    <TodoOptions></TodoOptions>
  </div>
</template>

<script>
import $store from "@/store/index.js";
import TodoOptions from "@/components/TodoOptions.vue";
export default {
  name: "UpdateTodo",
  components: {
    TodoOptions,
  },
  props: {},
  data() {
    return {
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