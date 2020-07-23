<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    modal: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  provide() {
    return {
      form: this
    };
  },
  created() {},
  methods: {
    validate(cb) {
      let items = this.$children.filter(item => item.prop).map(item => item.validate());
      Promise.all(items)
        .then(() => {
          cb(true);
        })
        .catch(() => {
          cb(false);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
