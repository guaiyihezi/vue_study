<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator';
export default {
  name: 'k-form-item',
  inject: ['form'],
  data() {
    return {
      error: ''
    };
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  methods: {
    validate() {
      const value = this.form.modal[this.prop];
      const rule = this.form.rules[this.prop];
      // 创建描述对象
      const desc = {[this.prop]: rule};
      // 创建校验实例
      const schema = new Schema(desc);
      return schema.validate({[this.prop]: value}, error => {
        if (error) {
          this.error = error[0].message;
        } else {
          this.error = '';
        }
      });
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate();
    });
  }
};
</script>

<style lang="scss" scoped></style>
