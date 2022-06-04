<template>
  <div>
    <feedback-item
          v-for="feedback in feedbacks"
          :feedback="feedback"
    />
  </div>
</template>

<script>
import FeedbackItem from "@/components/FeedbackItem";
export default {
  components: {FeedbackItem},
  props:{
    feedbacks:{
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.feedback-list{
  padding: 15px;
  border: 2px solid teal;
  background: azure;
  margin:15px auto;
  width: 30%;
  display: flex;
}

</style>