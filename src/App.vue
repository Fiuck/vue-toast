<template>
  <div id="app">
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    btnClick() {
      this.$toast.show('你好')
    }
  }
}
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
