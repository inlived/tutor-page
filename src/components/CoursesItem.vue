<template>
  <div class="course">
    <li>
    <div><strong>{{course.title}}</strong></div>
    <div>{{course.description}}</div>
      <div><i>{{course.price}}</i></div>
    </li>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  components: {MyButton},
  props:{
    course:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.course_btn{
  display: flex;
}
</style>