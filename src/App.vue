<template>
  <div id="app">
    <header-item></header-item>
    <MainPage></MainPage>
    <ContentItem></ContentItem>
    <FooterItem></FooterItem>
  </div>
</template>

<script>
import HeaderItem from "./components/HeaderItem.vue";
import MainPage from "./view/MainPage.vue";
import FooterItem from "./components/FooterItem.vue";
import ContentItem from "./components/ContentItem.vue";

export default {
  name: "App",
  components: {
    HeaderItem,
    MainPage,
    FooterItem,
    ContentItem,
  },
};
</script>

<style lang="less">
@import url("./assets/css/base.css");
// @import url("./assets/css/mobile.css");
body {
  font-size: 1.05rem;
}
.wrap {
  min-height: 100vh;
  padding: 3.75rem;
  // box-shadow: 0 0 2rem 2rem #ffffff inset;
  width: 100%;
}
@media screen and(max-width:1000px) {
  .wrap {
    padding: 2rem 1rem !important ;
  }
}
.container {
  display: flex;
  justify-content: center !important;
  // text-align: center;
  // align-items: center;
}

// #app {
//   overflow: hidden;
// }
</style>
