<template>
  <router-view/>
</template>

<style>

#app {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  color: var(--main-color-text);
}

a:active,
a:hover,
a {
  text-decoration: none;
  color: var(--main-color-text)
}


body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  background-color: var(--sub-color-text);
  display: flex;
  flex-direction: column;
  /*overflow: hidden;*/
}


:root {
  --calc-height: calc(var(--vh, 1vh) * 100);
  --calc-width: calc(var(--vw, 1vw) * 100);

  --header-height: 140px;

  --main-color-text: #000000;
  --sub-color-text: #EEEAE1;
}

@media (max-width: 2560px){
  :root {
  }
}



@media (max-width: 1920px) {
  :root {
  }
}


@media (max-width: 1500px) {
  :root {
  }
}
@media (max-height: 800px) {
  :root {
  }
}

@media (max-width: 1400px) and (min-height: 801px) {
  :root {
  }
}

@media (max-width: 1133px) {
  :root {
  }
}

@media (max-width: 769px) {
  :root {
  }
}

@media (max-width: 769px)  and (min-height: 720px) and (max-height: 1000px) {
  :root {
  }
}


@media (min-width: 2561px) {
  :root {
  }
}

input,
button,
textarea,
select, p {
  outline: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

img {
  object-fit: cover;
  object-position: center;
}

ul,
ol {
  /*padding: 0;*/
}

* {
  box-sizing: border-box;
}

</style>

<script setup>
import '../src/static/fonts.css'
import '../src/assets/animation/animation.css'
import '../src/assets/animation/animationSpawn.css'
import '../src/assets/style/style.css'
</script>
