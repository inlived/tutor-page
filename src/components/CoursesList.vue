<template>
  <div>
    <ul class="course">
    <courses-item
        v-for="course in courses"
        :course="course"
    />
    </ul>
  </div>
</template>

<script>
import CoursesItem from "@/components/CoursesItem";
export default {
  components: {CoursesItem},
  props:{
    courses:{
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.course{
  padding: 0;
  border-top: 3px solid teal;
  border-left: 3px solid teal;
  border-bottom: 3px solid teal;
  border-right: 3px solid teal;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 5px;
  padding: 5px;
}
.course li{
  height: 120px;
  border-bottom: 3px solid teal;
  border-right: 3px solid teal;
  flex: 1 0 235px;box-sizing: border-box;
}
</style>