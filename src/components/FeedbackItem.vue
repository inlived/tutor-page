<template>
  <div class="feedback-list">
    <div>
    <div><strong>{{feedback.username}}</strong></div>
    <div>{{feedback.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    feedback:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>