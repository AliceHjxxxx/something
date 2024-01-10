<template>
  <div id="intro-page">
    <div
      v-for="(item, index) in content"
      :key="index"
      class="wrap contianer"
      :class="'bg' + (index + 1)"
    >
      <!-- 下载 -->
      <div class="left">
        <div
          v-if="(index + 1) % 2 == 0"
          :class="'show-pro' + (index + 1)"
          class="show-img"
        >
          <img :src="item.img" alt="产品图片" class="animate__animated" />
        </div>
        <div v-else class="text" v-html="item.text"></div>
      </div>
      <div class="right">
        <div
          v-if="(index + 1) % 2 != 0"
          :class="'show-pro' + (index + 1)"
          class="show-img"
        >
          <img :src="item.img" alt="产品图片" class="animate__animated" />
        </div>
        <div v-else class="text text-right" v-html="item.text"></div>
      </div>
    </div>
    <CircleHot></CircleHot>
  </div>
</template>
<script>
import CircleHot from "./CircleHot.vue";
export default {
  name: "PageTwo",
  data() {
    return {
      content: [
        {
          img: require("../assets/images/show_prod/分镜助力创作.png"),
          text: ` <span class="details "
            ><p>囊括镜头内容、运镜信息，人人皆可上手分镜图</p>
            <h1 class="animate__animated animate__bounce">分镜助力创作</h1></span
          >
          <span
            ><p>简易手绘与实拍图结合，人人都能生成简易分镜图</p>
            <p>具备镜头语言、运镜方式等拍摄辅助信息</p>
            <p>一键预览成片及交互效果</p>
          </span> `,
        },
        {
          img: require("../assets/images/show_prod/专业范例.png"),
          text: ` <span class="details "
            ><p>专业指导，快速掌握视频创作核心技巧</p>
            <h1 class="animate__animated animate__bounce">专业范例</h1></span
          >
          <span
            ><p>UP主高热/精品视频分镜拆解</p>
            <p>范例使用者，也是内容产出者</p>
            <p>电影学院出品专业分镜，涵盖常见视频场景</p></span
          >`,
        },
        {
          img: require("../assets/images/show_prod/多端创作.png"),
          text: ` 
          <span class="details "
            ><p>随时随地，开启创作</p>
            <h1 class="animate__animated animate__bounce">
            多端创作
            </h1></span
          >
          <span
            ><p>手机、平板、PC云端互通，迅速开启创作</p>
            <p>实时编辑内容，预览成片</p></span
          >
        </div>`,
        },
        {
          img: require("../assets/images/show_prod/数码场记板.png"),
          text: ` <span class="details "
            ><p>连接摄影机，助力专业制作</p>
            <h1 class="animate__animated animate__bounce">数码场记板</h1></span
          >
          <span 
            ><p>视频素材便捷导入相机，提高生产效率</p>
            <p>扫码读取场记信息，高效素材管理，专利创新功能</p>
          </span>`,
        },
        {
          img: require("../assets/images/show_prod/多种支持.png"),
          text: ` <span class="details "
            ><p>支持主流视频剪辑工具，创作不设限</p>
            <h1 class="animate__animated animate__bounce">多种支持</h1></span
          >
          <span 
            ><p>一键投稿至哔哩哔哩</p>
            <p>导出工程文件至本地、必剪、Pr、云剪辑等专业剪辑工具/平台</p>
          </span>`,
        },
      ],
    };
  },
  components: { CircleHot },
};
</script>
<style lang="less">
#intro-page {
  padding-top: 3.125rem;
}

.wrap {
  background-size: cover !important;
  display: flex;
  justify-content: space-around;
}
//5个页面的背景图和虚化
.bg1,
.bg2,
.bg3,
.bg4,
.bg5 {
  box-shadow: 0 0 2rem 2rem #ffffff inset;
}
.bg1 {
  background: url("../assets/images/background/背景1.png") no-repeat;
}
.bg2 {
  background: url("../assets/images/background/背景2.png") no-repeat;
}
.bg3 {
  background: url("../assets/images/background/背景3.png") no-repeat;
}
.bg4 {
  background: url("../assets/images/background/背景4.png") no-repeat;
}
.bg5 {
  background: url("../assets/images/background/背景5.png") no-repeat;
}
.bottom {
  padding-bottom: 0 !important;
}
// 左右布局
.right,
.left {
  display: flex;
  // justify-content: center;
  align-items: center;
  // text-align: center;
  // padding: 0 5rem;
}

// 宽度图加宽
.show-pro4,
.show-pro3,
.show-pro5 {
  width: 45rem;
  height: 30rem;
  img {
    width: 100%;
    height: auto;
  }
}

// 竖图变窄
.show-pro2,
.show-pro1 {
  width: 30rem;
  height: 30rem;
  img {
    width: auto;
    height: 100%;
  }
}

// 图片在盒子内的布局
.show-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

// 文字细节
.text {
  line-height: 2.5rem;
  span {
    padding: 1.875rem;
  }
}
// 文字细节的加粗
.details {
  font-weight: bold;
  font-size: 1.2rem !important;
}

// 偶数屏的字幕靠右
.text-right {
  text-align: right;
}

// 移动端布局
@media screen and(max-width:1000px) {
  .wrap {
    box-sizing: border-box !important;
    flex-direction: column;
    height: 100vh !important;
    min-height: none !important;
  }

  h1 {
    font-size: 1.7rem !important;
  }
  .details {
    font-size: 1.05rem !important;
  }

  #intro-page {
    padding-top: 1rem;
  }
  .show-pro2,
  .show-pro1 {
    width: 20rem;
    height: 20rem;
  }
  .show-pro4,
  .show-pro3,
  .show-pro5 {
    width: 30rem !important;
    height: 20rem;
  }
  .right,
  .left {
    justify-content: center;
  }
  .text {
    line-height: 2rem;
    span {
      padding-bottom: 0.5rem !important;
    }
  }
}
</style>