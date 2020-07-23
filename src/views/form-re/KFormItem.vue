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
      type: String
    }
  },
  methods: {
    validate() {
      // debugger;
      let value = this.form.modal[this.prop];
      let rules = this.form.rules[this.prop];
      let schema = new Schema({[this.prop]: rules});
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
