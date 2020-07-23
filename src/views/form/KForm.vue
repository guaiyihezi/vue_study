<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this
    };
  },
  props: {
    modal: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate(cb) {
      const task = this.$children.filter(item => item.prop).map(item => item.validate());
      Promise.all(task)
        .then(() => {
          cb(true);
        })
        .catch(() => {
          cb(false);
        });
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped></style>
