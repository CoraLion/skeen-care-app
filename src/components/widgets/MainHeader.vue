<template>
  <header class="header-container">
    <div class="header-content">
      <div class="header-logo-container" @click="routToHome">
        <img :src="getUrl('skeen.svg')" alt="logo">
      </div>

      <div class="header-menu-container">
          <p class="menu-text-container menu"
             v-for="item in menuInfo"
             :class="{'active-text' : item.id === activeIndex}"
             :key="item.id">
              {{ item.text }}
          </p>
      </div>

      <div class="header-button-container"
           @mouseenter="focusTrue"
           @mouseleave="focusFalse">
          <p class="menu-text-container button">
            {{ textButton }}
          </p>
          <div class="icon-container">
            <transition name="fade-opacity-1">
              <img v-if="!focusParam" :src="getUrlIcons('shopping-bag-dark.svg')" alt="logo">
              <img v-else :src="getUrlIcons('shopping-bag-light.svg')" alt="logo">
            </transition>
          </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      focusParam: false,
      activeIndex: 0,
      menuInfo: [
        {
          id: 0,
          text: 'HOME'
        },
        {
          id: 1,
          text: 'SHOP'
        },
        {
          id: 2,
          text: 'BOUNDLES'
        },
        {
          id: 3,
          text: 'BLOG'
        }
      ],
      textButton: 'ADD TO CART'
    }
  },
  methods: {
    routToHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">

  .menu-text-container {
    font-size: 18px;
    color: var(--sub-color-text);
    text-transform: uppercase;
    transition: opacity .6s ease;
    opacity: .6;
    font-weight: 500;
    cursor: pointer;

    &.button {
      font-weight: 600;
      transition: color .6s ease;
      color: var(--main-color-text);
      opacity: 1;
    }

    &.menu {
      &.active-text {
        opacity: 1;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  .header-container {
    position: fixed;
    z-index: 900;
    width: 100%;
    height: var(--header-height);
    margin-top: 58px;

    .header-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      max-height: 84px;
      max-width: 1348px;
      width: 100%;
      margin: 0 auto;
      border-radius: 13.5px;
      background-color: var(--main-color-text);
      padding: 11px 28px;

      .header-logo-container {
        max-width: 145px;
        width: 100%;
        height: 100%;
        padding: 0 14px;
        cursor: pointer;

        & img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .header-menu-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        max-width: 582px;
      }

      .header-button-container {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 11px;
        height: 100%;
        max-width: 218px;
        width: 100%;
        background-color: var(--sub-color-text);
        transition: all .6s ease;
        border-width: 0;
        border-style: solid;
        border-color: var(--sub-color-text);
        white-space: nowrap;

        .icon-container {
          max-width: 42px;
          max-height: 42px;
          min-width: 42px;
          min-height: 42px;
          height: 100%;
          width: 100%;
          padding: 7.5px;

          & img {
            width: inherit;
            height: inherit;
            object-fit: contain;
          }
        }

        &:hover {
          border-width: 1px;
          background-color: var(--main-color-text);
          .menu-text-container {
            &.button {
              color: var(--sub-color-text)
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .header-container {
      padding: 0 46px;
    }
  }
</style>