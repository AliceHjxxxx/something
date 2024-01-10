<template>
  <div class="footer">
    <p>上海哔哩哔哩动画有限公司</p>
    <p>互联网ICP备案：沪ICP备13044875号-4</p>
  </div>
</template>
<script>
export default {
  name: "FooterItem",
};
</script>
<style lang="less" scoped>
.footer {
  height: 3.75rem;
  font-size: 0.625rem;
  text-align: center;
  line-height: 1.25rem;
  padding: 0.625rem;
  background: linear-gradient(to right, #e5f1ff, #ecf8ff, #f1f2ff, #f3edff);
}
@media screen and(max-width:750px) {
  .footer {
    font-size: 1rem !important;
    line-height: 1.5rem !important;
  }
}
</style>