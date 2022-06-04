<template>
  <title>Курсы</title>
  <div>
    <h1 class="title">Доступные тарифы занятий</h1>
    <CoursesList
        :courses="courses"
    />
  </div>
</template>

<script>
import CoursesList from "@/components/CoursesList";
import CoursesItem from "@/components/CoursesItem";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";

export default {
  components:{
    MyButton,
    MyDialog,
    CoursesList,
    CoursesItem
  },
  data(){
    return{
      courses:[
        {id: 1, title: 'Разговорный клуб', description: 'Встречи раз в неделю. Группы от 3 до 5 человек.', price: '3000 рублей в месяц'},
        {id: 2, title: 'Персональные занятия', description: 'Составление личной программы на основе вашего уровня.', price: '5000 рублей в месяц'},
        {id: 3, title: 'Занятия в группе', description: 'Поднятие уровня языка. Группы от 3 до 5 человек', price: '4000 рублей в месяц'},
        {id: 4, title: 'Подготовка к экзаменам', description: '1-2 раза в неделю. ОГЭ, ЕГЭ, другие', price: '6000 рублей в месяц'},
      ],
      dialogVisible: false,
    }
  },
  methods:{
  },
}
</script>

<style>

.title {
  color: #111;
  font-family: ‘Open Sans Condensed’, sans-serif;
  font-size: 32px; font-weight: 700; line-height: 64px; margin: 0 0 0; padding: 20px 30px; text-align: center; text-transform: uppercase;
}

form{
  display: flex;
  flex-direction: column;
}


</style>