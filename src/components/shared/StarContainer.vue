<template>
  <div class="star-icon-container">
    <img :src="getUrlIcons('star.svg')" alt="glass">
  </div>
</template>

<script>
export default {
  name: "StarContainer"
}
</script>

<style scoped lang="scss">
.star-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 79px;
  max-height: 79px;
  height: 100%;
  width: 100%;

  & img {
    width: 100%;
    height: 100%;
  }
}
</style>