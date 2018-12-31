<template>
  <div id="app">
    <h1>{{ rating }} Sterne</h1>
    <!-- <List msg="Welcome to Your Vue.js App" /> -->
    <ul>
      <li v-for="item in items" v-bind:key="item">
        <h2>{{ item.rating }} Sterne</h2>
        <p>{{ item.text }}</p>
        <p>{{ item.author }}</p>
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
        { author: "Name1", text: "irgendwas", rating: 5 },
        { author: "Name2", text: "Message1", rating: 4 },
        { author: "irgendwas", text: "Message2", rating: 3 },
        { author: "Name3", text: "Message3", rating: 2 },
        { author: "Name3", text: "Message3", rating: 4.5 }
      ],
      rating: 3.5
    };
  },
  methods: {
    getRating: function () {
      axios.get()
      .then()
    }
  }
};

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
  color:blue;
  border: black solid 1px;
  padding: 3em 0 3em 0;
}
</style>
