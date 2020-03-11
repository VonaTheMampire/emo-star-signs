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

body {
  overflow-y: scroll;
}

/* width */
::-webkit-scrollbar {
  width: 0px;
}

/* Track */
::-webkit-scrollbar-track {
  background: white;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: white;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: white;
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

.slide-left-enter-active, .slide-left-leave-active {
transition: opacity .2s, margin .1s;
}

.slide-left-enter, .slide-left-leave-to {
  opacity: 0;
  margin-left: -6px;
}

.slide-right-enter-active, .slide-right-leave-active {
transition: opacity .2s, margin .1s;
}

.slide-right-enter, .slide-right-leave-to {
  opacity: 0;
  margin-left: 6px;
}
</style>
