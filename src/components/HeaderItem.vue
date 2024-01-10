<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/images/icon/logo3x.png" alt="logo" />
      创片儿
      <div class="title">| bilibili官方出品</div>
    </div>
    <ul class="menu">
      <li class="bilibili">
        <a
          href="https://www.bilibili.com"
          target="_blank"
          title="点我进入异次元世界，喵~"
          >哔哩哔哩</a
        >
      </li>
      <li>
        <el-popover placement="bottom" trigger="click">
          <div class="download-rn">
            <div class="left-wrap">
              <div class="QR-scan"><img :src="QR" /></div>
              <span>客户端扫码</span>
            </div>
            <span class="split"></span>
            <div class="right-wrap">
              <span>适用于Windows设备</span>
              <a class="windows-dl">立即下载</a>
            </div>
          </div>
          <a slot="reference" class="active">立即下载</a>
        </el-popover>
      </li>
      <li>
        <a
          href="https://www.bilibili.com/blackboard/activity-MiDaPKJbH8.html"
          target="_blank"
          >用户协议</a
        >
      </li>
      <li>
        <a
          href="https://www.bilibili.com/blackboard/activity-77NQxXQuRg.html"
          target="_blank"
          >隐私政策</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HeaderItem",
  data() {
    return {
      QR: require("../assets/images/show_prod/download-rn.png"),
    };
  },
};
</script>
<style lang="less">
// 导航栏高度和字体行高
@header-height: 3.3rem;
.header {
  background-color: #fff;
  position: fixed;
  z-index: 111;
  width: 100%;
  height: @header-height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: @header-height;
  .logo {
    font-size: 1.125rem;

    padding: 0 1.875rem;
    img {
      width: 1.875rem;
      height: 1.875rem;
    }
    .title {
      display: inline;
    }
  }
  .menu {
    height: inherit;
    padding: 0 1rem;
    line-height: inherit;
    li {
      font-size: 0.8rem;
      cursor: pointer;
      float: left;
      padding: 0 0.525rem;
    }
    a {
      padding: 0.3rem 0.35rem;
    }
    a:hover {
      color: #a6b7d2;
    }
    .active {
      border-radius: 0.3125rem;
      background: linear-gradient(to right, #5db1ff, #80cbff, #82cdff);
      color: #fff;
    }
    .active:hover {
      color: #fff;
    }
  }
}

.el-popover {
  margin: 0 auto;

  .download-rn {
    font-size: 0.875rem !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .split {
      display: block;
      width: 0.125rem;
      height: 8.125rem;
      background-color: #ddd;
    }
    .left-wrap {
      text-align: center;
      margin: 1rem;
      .QR-scan {
        margin: 0.4rem;
        width: 5rem;
        height: 5rem;
      }
    }
    .right-wrap {
      text-align: center;
      margin: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .windows-dl {
        min-width: 64px;
        width: 5rem;
        margin: 1rem;
        border: 0.0625rem solid #dcdfe6;
        display: block;
        color: #909399;
        // background: #f4f4f5;
        background: linear-gradient(
          to right,
          #e5f1ff,
          #ecf8ff,
          #f1f2ff,
          #f3edff
        );
        cursor: pointer;
        border-radius: 0.25rem;
        outline: 0;
        text-align: center;

        padding: 0.3rem !important;
        span {
          display: block;
        }
      }
    }
  }
}

// 移动端适配
@media screen and(max-width:1000px) {
  body {
    font-size: 1rem !important;
  }

  /* 导航头部 */
  .header {
    .logo {
      padding: 0 1rem;
      font-size: 1.3rem;
      .title {
        display: none !important;
      }
    }

    .el-popover .download-rn .right-wrap[data-v-56193d70] {
      display: none !important;
    }

    .menu {
      padding: 0 0.5rem !important;
      li {
        font-size: 1.1rem !important;
      }

      li:nth-child(3),
      li:nth-child(4) {
        display: none !important;
      }
    }
  }
  .right-wrap,
  .split {
    display: none !important;
  }
  .el-popover,
  #el-popover-4345 {
    min-width: 0;
  }
  .left-wrap {
    margin: 0 !important;
  }
}
</style>