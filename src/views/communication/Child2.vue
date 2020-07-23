<!--
 * @Descripttion : 
 * @Author       : xiongzicheng
 * @Date         : 2020-07-20 15:10:59
 * @LastEditors  : xiongzicheng
 * @LastEditTime : 2020-07-20 15:50:31
-->
<template>
  <div>
    <h2>child2</h2>
    <p>{{ foo }}</p>
  </div>
</template>

<script>
export default {
  inject: ['foo'],
  created() {
    this.$parent.$on('foo', () => {
      console.log('child2被调用');
    });
  },
  methods: {}
};
</script>

<style></style>
