<template>
  <div id="app">
    <!-- <List msg="Welcome to Your Vue.js App" /> -->
    <ul>
      <li v-for="item in items" v-bind:key="item">
        {{ item.author + item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
// import List from "./components/List.vue";

export default {
  name: "app",
  data: function() {
    return {
      items: [
        { author: "Name1", text: "irgendwas" },
        { author: "Name2", text: "Message1" },
        { author: "irgendwas", text: "Message2" },
        { author: "Name3", text: "Message3" }
      ]
    };
  },
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  list-style: none;
}
</style>
