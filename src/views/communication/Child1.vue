<!--
 * @Descripttion : 
 * @Author       : xiongzicheng
 * @Date         : 2020-07-20 15:10:59
 * @LastEditors  : xiongzicheng
 * @LastEditTime : 2020-07-20 16:17:08
-->
<template>
  <div>
    <h2 @click="showBrother">child1</h2>
    <p>{{ $attrs.foo }}</p>
    <slot name="btn" :btnTxt="btnTxt" lala="lala"></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    btnTxt: 'from c1'
  }),
  methods: {
    showBrother() {
      this.$parent.$emit('foo');
    }
  }
};
</script>

<style></style>
