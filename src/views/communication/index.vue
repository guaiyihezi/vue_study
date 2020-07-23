<!--
 * @Descripttion : 
 * @Author       : xiongzicheng
 * @Date         : 2020-07-20 15:10:41
 * @LastEditors  : xiongzicheng
 * @LastEditTime : 2020-07-20 16:23:29
-->
<template>
  <div>
    <h2>{{ msg }}</h2>
    <child1 foo="$parent foo">
      <template v-slot:btn="c1">{{ c1.btnTxt }}&{{ c1.lala }}</template>
    </child1>
    <child2></child2>
  </div>
</template>

<script>
import Child1 from './Child1';
import Child2 from './Child2';
export default {
  provide: () => ({
    foo: 'provide foo'
  }),
  data: () => ({
    msg: 'father componment'
  }),
  components: {Child1, Child2},
  methods: {}
};
</script>

<style></style>
