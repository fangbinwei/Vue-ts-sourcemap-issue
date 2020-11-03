<template>
  <div id="app">
    <Foo :count="3+2"></Foo>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Foo from "@/components/Foo.vue";

// eslint-disable-next-line no-unused-vars
const a = 6;
// eslint-disable-next-line no-unused-vars
const b = 7;

console.log("a+b")
@Component({
  components: {
    HelloWorld,
    // eslint-disable-next-line no-undef
    Foo
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
