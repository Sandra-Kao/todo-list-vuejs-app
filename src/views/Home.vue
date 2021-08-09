<template>
  <div class="home-page">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TodoContent></TodoContent>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoContent from "@/components/TodoContent.vue";

export default {
  name: 'Home',
  components: {
    TodoContent
  }
}
</script>
