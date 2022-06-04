<template>
  <div>
    <title>Отзывы</title>
    <h1 class="title">Отзывы студентов</h1>
    <my-button
        style="position: relative; left: 50%; transform: translate(-50%, 0);"
        @click="showDialog"
    >Оставить отзыв</my-button>
    <my-dialog v-model:show="dialogVisible">
      <FeedbackForm
          @create="leaveFeedback"
      />
    </my-dialog>
    <FeedbackList
        :feedbacks="feedbacks"
    />
  </div>
</template>

<script>
import FeedbackList from "@/components/FeedbackList";
import FeedbackForm from "@/components/FeedbackForm";
import CoursesList from "@/components/CoursesList";
import CoursesItem from "@/components/CoursesItem";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";

export default {
  components:{
    MyButton,
    MyDialog,
    FeedbackList,
    FeedbackForm,
    CoursesList,
    CoursesItem
  },
  data(){
    return{
      feedbacks: [
        {id: 1, username: 'Татьяна Иванова', text: 'Занимаемся уже 2 месяца. Отличный преподаватель!'},
        {id: 2, username: 'Евгений', text: 'Всё супер! Больше не боюсь разговаривать'}
      ],
      dialogVisible: false,
    }
  },
  methods:{
    leaveFeedback(feedback){
      this.feedbacks.push(feedback);
      this.dialogVisible = false;
    },
    showDialog(){
      this.dialogVisible = true;
    },
  },
}
</script>

<style>

.info{
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

.title {
  color: #111;
  font-family: ‘Open Sans Condensed’, sans-serif;
  font-size: 32px; font-weight: 700; line-height: 64px; margin: 0 0 0; padding: 20px 30px; text-align: center; text-transform: uppercase;
}

.subtitle{
  margin: 1em 0 0.5em 0;
  color: #148773;
  font-size: 26px;
  line-height: 40px;
  font-weight: bold;
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
}

form{
  display: flex;
  flex-direction: column;
}
</style>