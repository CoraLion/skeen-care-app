<template>
  <div class="linear-button-container">
    {{ textButton }}
  </div>
</template>

<script>
export default {
  name: "ButtonLinear",
  props: {
    textButton: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .linear-button-container {
    cursor: pointer;
    color: var(--main-color-text);
    font-size: 22px;
    font-weight: 600;
    position: relative;
    width: fit-content;
    transition: all .6s ease;
    text-shadow: 0 0 var(--main-color-text), 0 0 var(--main-color-text), 0 0 var(--main-color-text), 0 0 var(--main-color-text);

    &:hover {
      text-shadow: -1px 0 var(--main-color-text), 0 1px var(--main-color-text), 1px 0 var(--main-color-text), 0 -1px var(--main-color-text);
      color: var(--sub-color-text);
    }

    &:after {
      content: "";
      width: 100%;
      bottom: -4px;
      left: 0;
      height: 1px;
      background-color: var(--main-color-text);
      position: absolute;
    }
  }
</style>