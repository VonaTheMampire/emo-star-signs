<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
// font imports
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Indie+Flower&display=swap');

// body attributes
body, html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Indie Flower', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  background: white;
  color: black;
}
</style>
