<template>
  <div class="oval-button-container">
    <div class="oval-button-content">
      {{ textButton }}
    </div>
    <div class="oval-button-content background">
    </div>
  </div>

</template>

<script>
export default {
  name: "ButtonOval",
  props: {
    textButton: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .oval-button-container {
    position: relative;
    max-width: 387px;
    &:hover {
      .oval-button-content {
        background-color: var(--sub-color-text);
        color: var(--main-color-text);
      }
    }

    .oval-button-content {
      font-size: 22px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: var(--main-color-text);
      color: var(--sub-color-text);
      transition: all .6s ease;
      border-radius: 50%;
      width: 100%;
      height: 101px;
      position: relative;
      z-index: 3;
      border-width: 1px;
      border-style: solid;
      border-color: var(--main-color-text);

      &.background {
        position: absolute;
        z-index: 0;
        background-color: rgba(0,0,0,0);
        top: 17px;
      }
    }

  }
</style>