<template>
    <div class="login-container">
      <van-nav-bar title="龙泉学员食堂" fixed />
      <div class="login-content">
        <h1 class="login-title">龙泉学员食堂登录</h1>
        <van-form @submit="onSubmit" @reset="onReset">
          <van-field
            v-model="username"
            label="用户名"
            placeholder="请输入用户名"
            :rules="[
              { required: true, message: '用户名不能为空' }
            ]"
          />
          <van-field
            v-model="password"
            label="密码"
            type="password"
            placeholder="请输入密码"
            :rules="[
              { required: true, message: '密码不能为空' }
            ]"
          />
          <div class="button-group">
            <van-button type="primary" native-type="submit">登录</van-button>
            <van-button native-type="reset">重置</van-button>
          </div>
        </van-form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        rememberMe: false
      };
    },
    methods: {
      onSubmit(values) {
        console.log('登录信息:', values);
        if (this.rememberMe) {
          // 这里可以添加保存用户名和密码到本地存储的逻辑
          console.log('已选择记住密码');
        }
        alert('登录成功');
        this.$router.push('canteen')
      },
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
  }
  
  .login-content {
    padding-top: 46px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    padding: 20px;
  }
  
  .login-title {
    margin-bottom: 30px;
    font-size: 24px;
  }
  
  .remember-forget {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  
  .button-group {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  </style>
      