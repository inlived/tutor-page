<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  box-shadow: 0 0 5px;
}
.btn:hover {
  background: white;
  color: #3a7999;
  box-shadow: inset 0 0 0 3px white;
}
</style>

