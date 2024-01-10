<template>
  <div class="scroll-wrap" @click="toPinglun">
    <span>了解更多</span>
    <a>
      <div class="scroll-down"></div>
    </a>
  </div>
</template>
<script>
export default {
  name: "ScrollDown",
  methods: {
    toPinglun() {
      document.getElementById("intro-page").scrollIntoView();
    },
  },
};
</script>
<style lang="less" scoped>
.scroll-wrap {
  height: 2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  // transform: translateX(-50%);
  bottom: 1.7rem;
  border-radius: 2rem;
  cursor: pointer;
  span {
    font-size: 0.8125rem;
  }
}
.scroll-down {
  position: relative;
  height: 1.7rem;
  //   border: 2px solid black;
}
.scroll-down::before,
.scroll-down::after {
  content: "";
  position: absolute;
  top: 20%;
  left: 50%;
  height: 0.8125rem;
  width: 0.8125rem;
  transform: translate(-50%, -100%) rotate(45deg);
  border: 0.125rem solid black;
  border-top: transparent;
  border-left: transparent;
  animation: scroll-down 1s ease-in-out infinite;
}
.scroll-down::before {
  top: 30%;
  animation-delay: 0.3s;
  /* animation: scroll-down 1s ease-in-out infinite; */
}

@keyframes scroll-down {
  0% {
    /* top:20%; */
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    top: 90%;
    opacity: 0;
  }
}
</style>