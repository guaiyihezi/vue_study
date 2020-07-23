<template>
  <div>
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    onInput(e) {
      // 派发input事件
      this.$emit('input', e.target.value);
      // 通知父级校验
      this.$parent.$emit('validate');
    }
  }
};
</script>

<style lang="sass" scoped></style>
