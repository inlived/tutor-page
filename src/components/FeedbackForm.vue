<template>
  <div>
    <form @submit.prevent>
      <h2 class="subtitle">Оставить отзыв</h2>
      <my-input
          v-model="feedback.username"
          type="text"
          placeholder="Ваше имя"
      />
      <my-input
          v-model="feedback.text"
          type="text"
          placeholder="Текст отзыва"
      />
      <my-button
          style="align-self: flex-end"
          @click="leaveFeedback"
      >Отправить
      </my-button>
    </form>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import MyButton from "@/components/UI/MyButton";
export default {
  components: {MyInput, MyButton},
  data(){
  return{
    feedback:{
      username:'',
      text: ''
    }
  }
},
  methods:{
    leaveFeedback(){
      this.feedback.id = Date.now();
      this.$emit('create', this.feedback)
      this.feedback = {
        username:'',
        text: ''
      }
    }
  }
}
</script>

<style scoped>

</style>