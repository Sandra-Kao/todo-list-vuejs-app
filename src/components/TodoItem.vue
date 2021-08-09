<template>
  <li class="todo-content__item-line">
    <p class="padding-helf">
      <i class="far fa-circle" :class="{ checked: todo.isDone }"></i>
      <span>{{ todo.item }}</span>
    </p>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo:{
      item:String,
      isDone:Boolean
    }
  },
  mounted() {
  },
  computed: {
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

.todo-content ul {
  margin-top: 2.6rem;
  list-style: none;
  font-size: 1.3rem;
  background: var(--color-primary-base);
  padding: 50px;
  border-radius: 10px;
  min-height: 70vh;
}

.todo-content__item-line {
  display: flex;
  align-items: center;
  padding: 1rem 5rem;
  background: var(--color-primary-darkest);
  border-radius: 25px;
  margin-bottom: 1rem;
}
.todo-content__item-line p {
  transition: 0.1s ease-out;
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
</style>
