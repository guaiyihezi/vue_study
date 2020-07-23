<!--
 * @Descripttion : 
 * @Author       : xiongzicheng
 * @Date         : 2020-07-15 19:26:47
 * @LastEditors  : xiongzicheng
 * @LastEditTime : 2020-07-16 10:16:18
-->
<template>
  <div>
    <p v-for="route in _route" :key="route.name">
      <router-link :to="route.path">{{ route.name }}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: () => ({}),
  created() {
    console.log(this.$router.options.routes);
  },
  computed: {
    _route() {
      return this.$router.options.routes.filter((_, i) => i);
    }
  }
};
</script>

<style></style>
