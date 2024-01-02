<template>
  <div class="start-screen-container main-container">

    <div class="search-input-container">
      <input-main :info="inputInfo" :name-block="'start-screen-container'">
        <div class="icon-container">
          <img :src="getUrlIcons('glass.svg')" alt="glass">
        </div>
      </input-main>
    </div>

    <div class="top-info-container">
      <p class="main-title-content small">
        {{ firstMainTitle }}
      </p>
      <p class="main-title-content big">
        {{ secondMainTitle }}
      </p>
      <star-container/>
      <p class="main-title-content small">
        {{ thirdMainTitle }}
      </p>
      <div class="background-block-container"></div>
    </div>

    <div class="center-info-container">
      <div class="left-info-container">
        <div class="img-container left">
          <img :src="getUrlMan('man-1.jpg')" alt="glass">
        </div>
        <star-container/>
      </div>

      <div class="img-container center">
        <img :src="getUrlMan('man-2.jpg')" alt="glass">
      </div>

      <div class="right-info-container">
        <star-container/>
        <button-linear :text-button="linearTextButton"/>
        <div class="img-container right">
          <img :src="getUrlMan('man-3.jpg')" alt="glass">
        </div>
      </div>
    </div>

    <button-oval :text-button="ovalTextButton"/>

  </div>
</template>

<script>
import InputMain from "@/components/shared/InputMain.vue";
import ButtonLinear from "@/components/shared/ButtonLinear.vue";
import StarContainer from "@/components/shared/StarContainer.vue";
import ButtonOval from "@/components/shared/ButtonOval.vue";

export default {
  name: "StartScreen",
  components: {ButtonOval, StarContainer, ButtonLinear, InputMain},
  data() {
    return {
      inputInfo: {
        id: 0,
        type: 'text',
        dataIndex: 'search',
        placeholder: 'Search'
      },

      firstMainTitle: 'The New',
      secondMainTitle: 'Skin Care',
      thirdMainTitle: 'Essentials',
      linearTextButton: "WATCH REVIEWS",
      ovalTextButton: 'SHOP NOW'
    }
  }
}
</script>

<style scoped lang="scss">

  .start-screen-container {
    max-width: 1571px;
    padding-top: var(--header-height);


    .search-input-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 48px 0 60px;

      .input-container {
        max-width: 858px;
      }
    }

    .top-info-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;

      .star-icon-container {
        z-index: 2;
        top: 312px;
        position: absolute;
      }

      .main-title-content {
        line-height: 100%;
        font-family: 'Valky', sans-serif;
        font-weight: 400;
        color: var(--main-color-text);

        &:nth-child(2) {
          position: absolute;
          top: 105px;
        }

        &:nth-child(4) {
          margin-top: 301px;
        }

        &.small {
          position: relative;
          z-index: 1;
          font-size: 92px;
        }

        &.big {
          letter-spacing: -5.36px;
          font-size: 268px;
        }
      }

      .background-block-container {
        position: absolute;
        bottom: 0;
        border-radius: 24px;
        background: var(--sub-color-text);
        height: 127px;
        max-width: 534px;
        width: 100%;
        z-index: 0;
      }
    }

    .center-info-container {
      display: flex;
      flex-direction: row;
      column-gap: 62px;
      justify-content: space-between;
      margin-top: -150px;

      .img-container {
        overflow: hidden;
        width: 100%;
        height: 100%;

        & img {
          width: 100%;
          height: 100%;
        }

        &.left {
          margin-top: 0;
          margin-bottom: 114px;
          max-width: 300px;
          max-height: 451px;
          border-radius: 13px;
        }

        &.center {
          margin-top: 128px;
          max-width: 814px;
          max-height: 1308px;
          border-radius: 24px;
        }

        &.right {
          margin-top: 72px;
          max-width: 301px;
          max-height: 452px;
          border-radius: 10px;
          margin-bottom: -100px;
        }
      }

      .left-info-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        .star-icon-container {
          max-width: 72px;
          max-height: 72px;
        }
      }

      .right-info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: flex-end;

        .linear-button-container {
          margin-top: 74px;
        }

        .star-icon-container {
          max-width: 100px;
          max-height: 100px;
        }
      }
    }

    .oval-button-container {
      width: 100%;
      align-self: center;
      margin-top: 132px;
    }
  }

  @media screen and (max-width: 1280px) {
    .start-screen-container {

      .top-info-container {

        .star-icon-container {
          top: 172px;
          max-width: 48px;
          max-height: 48px;
        }

        .main-title-content {
          &:nth-child(4) {
            margin-top: 164px;
          }

          &:nth-child(2) {
            top: 72px;
          }

          &.small {
            font-size: 56px;
          }

          &.big {
            letter-spacing: -5.36px;
            font-size: 156px;
          }
        }

        .background-block-container {
          max-width: 292px;
          height: 64px;
        }
      }

      .center-info-container {
        margin-top: -156px;
      }
    }
  }
</style>