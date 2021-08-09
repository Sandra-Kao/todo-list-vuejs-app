<template>
  <!--  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> 
  </div>-->
  <div class="todo-content">
    <div class="todo-content__outer-1000 content-wrapper">
      <h1>
        Let's do this
        <span>Get things done, one item at a time.</span>
      </h1>

      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Quicksand", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
:root {
  --color-white: #fafdfe;
  --color-dark: #3b3b3b;
  --color-gray: #2a3f81;
  --color-spotlight-purple: #c81beb;
  --color-spotlight-blue: #2a79f3;
  --color-primary-light: #98b5ff;
  --color-primary-base: #3450a1;
  --color-primary-darker: #173588;
  --color-primary-darkest: #041955;
  --color-primary-base-15: rgb(52, 80, 161, 0.15);
}
* {
  margin: 0;
  padding: 0;
}
*,
*::after,
*::before {
  box-sizing: border-box;
}
html {
  /* font-size: 26px; */
  color: var(--color-white);
  text-align: center;
  background: var(--color-primary-darker);
}

.todo-content {
  display: flex;
  justify-content: space-around;
}
.todo-content__outer-1000 {
  width: 100%;
  max-width: 1000px;
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

.circle-btn {
  display: block;
  font-size: 1.5rem;
  width: 4rem;
  height: 4rem;
  background: var(--color-spotlight-purple);
  border-radius: 100%;
  color: var(--color-white);
  border: transparent;
  transition: 0.1s ease-in;
  transform: translate(0px, 0px);
}
.circle-btn:hover {
  cursor: pointer;
  color: var(--color-white);
  border: 1px solid #243975ab;
  background: rgb(200 27 235 / 80%);
}

.circle-btn:active {
  transform: translate(2px, 2px);
}
.content-wrapper {
  padding: 50px;
  border: 0.5px solid var(--color-primary-darker);
}
.todo-wrapper {
  margin-top: 2.6rem;
  list-style: none;
  font-size: 1.3rem;
  background: var(--color-primary-base);
  padding: 50px;
  border-radius: 10px;
  min-height: 70vh;
}
.padding-helf {
  padding: 0.5rem;
}
</style>
