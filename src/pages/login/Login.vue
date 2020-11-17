<template>
  <div class="login">
    <!-- 登录框 -->
    <div class="login-box">
      <!-- 标题 -->
      <h3 class="title">桥梁监测系统平台</h3>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgb(39, 44, 53);

  /* 登录框 */
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    width: 349px;
    height: 282px;
    background-color: rgb(57, 64, 74);

    .title {
      margin: 10px 0;
      color: rgb(178, 180, 184);
      font-size: 16px;
    }
  }
}
</style>
