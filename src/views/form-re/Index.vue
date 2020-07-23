<template>
  <div>
    <KForm :modal="userInfo" :rules="rules" ref="myform">
      <KFormItem label="用户名" prop="userName">
        <Kinput v-model="userInfo.userName" placeholder="请输入用户名"></Kinput>
      </KFormItem>
      <KFormItem label="密码" prop="userPassword">
        <Kinput v-model="userInfo.userPassword"></Kinput>
      </KFormItem>
      <KFormItem>
        <button @click="login">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import Kinput from './Kinput';
import KFormItem from './KFormItem';
import KForm from './KForm';
export default {
  data() {
    return {
      userInfo: {
        userName: '123',
        userPassword: '111'
      },
      rules: {
        userName: [{required: true, message: '请输入用户名'}],
        userPassword: [{required: true, message: '请输入用户名'}]
      }
    };
  },
  components: {
    Kinput,
    KFormItem,
    KForm
  },
  methods: {
    login() {
      this.$refs.myform.validate(vali => {
        if (vali) {
          console.log('success');
        } else {
          console.log('error');
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
