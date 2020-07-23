<template>
  <div>
    <input type="checkbox" :value="check" @click="$emit('change', $event.target.checked)" />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    check: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped></style>
