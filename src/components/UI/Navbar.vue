<template>
  <div class="navbar">
    <div class="navbar_btn">
      <my-button @click="$router.push('/')">Главная страница</my-button>
      <my-button style="margin-left: 10px" @click="$router.push('/courses')">Курсы</my-button>
      <my-button style="margin-left: 10px" @click="$router.push('/feedback')">Отзывы</my-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  height: 60px;
  background-color: azure;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar_btn{
  margin-right: auto;
}
</style>

