<template>
  <div class="wrap">
    <div class="text-intro">
      <h1>为 创 作 者 而 生</h1>
      <p class="font-blue">以分镜脚本为核心的全流程视频创作平台</p>
      <p class="font-gray">
        ——覆盖灵感、策划、拍摄、粗剪、投稿，把脑洞变为佳作
      </p>
    </div>
    <div class="container">
      <!-- 下载按钮 -->
      <div class="download-detail">
        <ul>
          <li
            v-for="(item, index) in download"
            :key="index"
            @mouseenter="changeImageSrc(index)"
            @mouseleave="remove()"
          >
            <a plain type="info" :name="item.name" :href="item.downloadLink">
              <div class="button-wrap">
                <img
                  :src="require(`@/assets/images/icon/${item.name}.png`)"
                  class="icon"
                />
                <div class="device">
                  <p class="type">{{ item.name }}</p>
                  <p>下载</p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!-- 产品展示 -->
      <div class="show-prod">
        <img
          :src="imgsrc"
          id="pro-img"
          class="animate__animated"
          style="width:'100%',height:'100%', object-fit: 'contain'"
        />
        <!-- </div> -->
      </div>
      <!-- 二维码 -->
      <div class="download-QR"><img :src="QR" alt="扫码下载客户端" /></div>
    </div>
    <ScrollDown></ScrollDown>
  </div>
</template>
<script>
import ScrollDown from "../components/ScrollDown.vue";
export default {
  name: "MainPage",
  components: { ScrollDown },
  data() {
    return {
      download: [
        {
          name: "App Store",
          url: require("../assets/images/show_prod/首页图 app store.png"),
          downloadLink: "#",
        },
        {
          name: "Android",
          url: require("../assets/images/show_prod/首页图 Android.png"),
          downloadLink: "#",
        },
        {
          name: "Windows",
          url: require("../assets/images/show_prod/首页图 Windows.png"),
          downloadLink: "#",
        },
      ],
      imgsrc: require("../assets/images/show_prod/首页图 app store.png"),
      QR: require("../assets/images/show_prod/download-rn.png"),
    };
  },
  methods: {
    changeImageSrc(index) {
      if (this.download[index].url !== this.imgsrc) {
        document.getElementById("pro-img").classList.add("animate__fadeIn");
        this.imgsrc = this.download[index].url;
        // document.getElementById("pro-img").classList.remove("w-100pre");
        // document.getElementById("pro-img").classList.add("h-100pre");
      }
    },
    remove() {
      document.getElementById("pro-img").classList.remove("animate__fadeIn");
    },
  },
};
</script>
<style lang="less"  scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain !important;
}
.wrap {
  position: relative;
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: url("../assets/images/background/彩色背景.png") no-repeat;
  background-size: cover;
}

// 下半部分的元素水平排布靠下
.container {
  align-items: flex-end !important;
}
// 文字介绍
.text-intro {
  line-height: 2.5rem;
  margin-top: 2rem;
  text-align: center;
}
.font-blue {
  margin-top: 0.625rem;
  color: #51a7ff;
  font-weight: bold;
  font-size: 1.2rem;
}
.font-gray {
  margin-bottom: 1rem;
  color: #79869a;
  font-weight: 500;
  font-size: 0.87rem;
}

// 产品展示
.show-prod {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 33rem;
  height: 23rem;
  margin: 0 3rem 0 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain !important;
  }
}
// 下载按钮
.download-detail {
  margin: 0 0 0 2.5rem;
  li {
    margin: 3.125rem 0;
  }
  li:last-child {
    margin-bottom: 3rem;
  }
  .icon {
    box-sizing: content-box;
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.8rem;
  }
}
a {
  border: 0.125rem solid#909399;
  display: block;
  color: #909399;
  background: transparent;
  cursor: pointer;
  border-radius: 0.5rem;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  padding: 0.3rem !important;
  .button-wrap {
    padding: 0 0.3125rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .device {
      font-size: 0.7rem;
      display: flex;
      flex-direction: column;
      align-items: flex-flex-start;
      justify-content: flex-flex-start;
      p:nth-child(1) {
        font-weight: bold;
        font-size: 0.875rem;
        line-height: 1.5rem;
      }
    }
  }
}
a:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: #51a7ff;
}

// 二维码
.download-QR {
  width: 9rem;
  height: 9rem;
  margin-bottom: 3rem;
}

// @media screen and(max-width:1500px) {
//   .download-QR {
//     margin-bottom: 5rem;
//   }
// }

// 移动端适配
@media screen and(max-width:1000px) {
  .download-QR {
    display: none !important;
  }
  .container {
    flex-direction: column !important;
  }
  .text-intro {
    line-height: 2.2rem;
    .font-blue {
      font-size: 1.15rem !important;
    }
    h1 {
      font-size: 1.8rem !important;
    }
    p {
      font-size: 0.85rem !important;
    }
  }
  .download-detail {
    margin: 0 auto;
    // display: flex !important;
    // justify-content: center !important;
    // margin: 0;
    li {
      float: left;
      font-size: 0.8rem !important;
      margin: 0 0.6rem;

      a {
        padding: 0.8rem 1rem !important;
        justify-content: center !important;
      }
      .device {
        display: none;
      }
    }

    .icon {
      width: 1.5rem;
      height: 1.5rem;
      margin: 0;
    }
  }
  .show-prod {
    width: 24rem;
    height: 21rem;
    margin: 0;
    align-items: center !important;
  }
}
</style>