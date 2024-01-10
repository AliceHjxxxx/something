<template>
  <div class="wrap">
    <div class="container">
      <ul class="outter commonflex">
        <li v-for="(item, index) in cicon" :key="index">
          <img :src="item" alt="" />
        </li>
        <!-- <li>二次创作</li>
        <li>脚本分镜</li>
        <li>平台发布</li>
        <li>拍摄指导</li>
        <li>团队协作</li>
        <li>素材管理</li> -->
        <div class="middle commonflex">
          <div class="inner commonflex">
            <div class="core-wrap commonflex">
              <div class="core commonflex">
                <span class="core-text">从视频制作者方方面面协力创作者们</span>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "CircleHot",
  data() {
    return {
      cicon: [
        require("../assets/images/circle/精品范例.png"),
        require("../assets/images/circle/分镜脚本.png"),
        require("../assets/images/circle/二次创作.png"),
        require("../assets/images/circle/素材管理.png"),
        require("../assets/images/circle/一键投稿.png"),
        require("../assets/images/circle/多端协同.png"),
        require("../assets/images/circle/拍摄指导.png"),
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.wrap {
  box-sizing: content-box;
  padding: 6rem 0 !important;
  width: 100%;
  height: 45rem;
  margin: 0 auto;
  overflow: hidden;
}

.commonflex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.outter {
  position: relative;
  width: 40rem;
  height: 40rem;
  background: url("../assets/images/circle/外圈.png");
  background-size: cover;
  animation: donut-spin 50s linear infinite;

  li {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
    // display: block;
    width: 12rem;
    height: 12rem;
    border: 1px soild #000 !important;
    border-radius: 50% !important;
    animation: donut-spin 50s linear infinite reverse;
  }
  li:nth-child(1) {
    left: 32%;
    top: -14%;
    transform: translate(-50%, 2rem);
  }
  li:nth-child(2) {
    left: 2%;
    top: 18%;
  }
  li:nth-child(3) {
    left: 65%;
    top: 6%;
  }
  li:nth-child(4) {
    left: -10%;
    top: 56%;
  }
  li:nth-child(5) {
    left: 75%;
    top: 39%;
  }
  li:nth-child(6) {
    left: 20%;
    top: 80%;
  }
  li:nth-child(7) {
    left: 57%;
    top: 70%;
  }
  .middle {
    width: 31.5rem;
    height: 31.5rem;
    background: url("../assets/images/circle/中圈.png");
    background-size: cover;
    animation: donut-spin 50s linear infinite reverse;
    .inner {
      width: 23rem;
      height: 23rem;
      background: url("../assets/images/circle/内圈.png");
      background-size: cover;
      animation: donut-spin 50s linear infinite reverse;
      .core-wrap {
        width: 20rem;
        height: 20rem;
        background: url("../assets/images/circle/外圈彩色圆.png");
        background-size: cover;
        animation: donut-spin 50s linear infinite;
        .core {
          width: 15rem;
          height: 15rem;
          background: url("../assets/images/circle/内圈彩色圆.png");
          background-size: cover;
          font-size: 1rem;
          font-weight: bold;
          padding: 2.5rem;
          text-align: center;
          // animation: donut-spin 40s linear infinite reverse;
        }
      }
    }
  }
}

@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@media screen and(max-width:1000px) {
  .wrap {
    min-height: 40vh !important;
    padding: 0 !important;
    height: 25rem;
  }
  // .container {
  //   flex-direction: column;
  // }
  .outter {
    width: 21rem;
    height: 21rem;
    li {
      width: 9rem;
      height: 9rem;
    }
    li:nth-child(1) {
      left: 28%;
      top: -22%;
    }
    li:nth-child(2) {
      left: -1%;
      top: 1%;
    }
    li:nth-child(3) {
      left: 61%;
      top: 6%;
    }
    li:nth-child(4) {
      left: -20%;
      top: 41%;
    }
    li:nth-child(5) {
      left: 67%;
      top: 39%;
    }
    li:nth-child(6) {
      width: 8rem;
      height: 8rem;
      left: 3%;
      top: 74%;
    }
    li:nth-child(7) {
      left: 40%;
      top: 63%;
    }

    .middle {
      width: 16rem;
      height: 16rem;
      .inner {
        width: 11rem;
        height: 11rem;
        .core-wrap {
          width: 8rem;
          height: 8rem;

          .core {
            width: 4rem;
            height: 4rem;
            .core-text {
              display: none;
            }
          }
        }
      }
    }
    .top-text {
      display: block !important;
    }
  }
}
</style>