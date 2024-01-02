<template>
  <main-header/>
  <router-view/>
</template>

<script>
import MainHeader from "@/components/widgets/MainHeader.vue";

export default {
  name: "MainLayout",
  components: {MainHeader},
  methods: {
    checkSize() {
      this.innerHeight = window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${this.innerHeight * 0.01}px`);
      this.innerWidth = window.innerWidth;
      document.documentElement.style.setProperty('--vw', `${this.innerWidth * 0.01}px`);
/*      if(this.innerWidth <= 769) {
        this.ACTIVE_MOBILE(true)
      } else {
        this.ACTIVE_MOBILE(false)
      }
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        this.ACTIVE_TOUCH_ALLOW(true)
      } else {
        this.ACTIVE_TOUCH_ALLOW(false)
      }*/
    },
  }
}
</script>

<style scoped>

</style>