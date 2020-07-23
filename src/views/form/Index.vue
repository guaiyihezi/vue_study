<template>
  <div>
    <KForm :modal="userInfo" :rules="rules" ref="myForm">
      <KFormItem label="用户名" prop="userName">
        <kinput v-model="userInfo.userName" placeholder="请输入用户名" />
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <kinput v-model="userInfo.password" placeholder="请输入用户名" />
      </KFormItem>
      <!-- <KFormItem label="勾选">
        <KCheckbox v-model="userInfo.check"></KCheckbox>
      </KFormItem> -->
      <KFormItem>
        <button @click="login">提交</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import Kinput from './Kinput';
// import KCheckbox from './KCheckbox';
import KFormItem from './KFormItem';
import KForm from './KForm';
import Notice from '@/components/Notic.vue';
export default {
  data() {
    return {
      userInfo: {
        userName: '',
        password: '',
        check: false
      },
      rules: {
        userName: [{required: true, message: '请输入用户名'}],
        password: [{required: true, message: '请输入密码'}]
      }
    };
  },
  methods: {
    login() {
      this.$refs.myForm.validate(valid => {
        const notice = this.$create(Notice, {
          title: 'biaoti ',
          message: valid ? '请求登录!' : '校验失败!',
          duration: 1000
        });
        notice.show();
      });
    }
  },
  components: {
    Kinput,
    // KCheckbox,
    KFormItem,
    KForm
  }
};
</script>

<style lang="scss" scoped></style>
