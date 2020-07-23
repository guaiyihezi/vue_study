<template>
  <div>
    <input type="text" :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  created() {
    console.log(this.$parent.$options);
  },
  methods: {
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    onInput(e) {
      this.$emit('input', e.target.value);
      // this.$parent.$emit('validate');
      this.dispatch('KFormItem', 'input-change', e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped></style>
