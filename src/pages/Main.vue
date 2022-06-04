<template>
  <title>Главная</title>
  <div>
    <h1 class="title"> Персональная страница репетитора </h1>
    <p class="subtitle">
      Дарья Алексеевна Сидоренко - преподаватель английского языка
    </p>
    <hr>
    <h1 style="text-align: left" class="subtitle"> Об образовании </h1>
    <div class="info" v-for="education in educations">
      <div><strong>Название: </strong>{{education.title}}, {{education.period}}</div>
      <div><strong>Город: </strong>{{education.place}}</div>
    </div>
    <div>
      <h1 style="text-align: left" class="subtitle"> Свяжитесь со мной </h1>
      <div class="social whatsapp">
        <a href="https://wa.me/89180896877" target="_blank"><i class="fa fa-whatsapp fa-2x"></i></a>
      </div>
      <div class="social telegram">
        <a href="https://t.me/sdrnkdr" target="_blank"><i class="fa fa-paper-plane fa-2x"></i></a>
      </div>
      <div class="social instagram">
        <a href="https://www.instagram.com/inlive.d/" target="_blank"><i class="fa fa-instagram fa-2x"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      educations: [
        {
          id: 1,
          title: 'Физико-математический лицей им. А. В. Суворова',
          place: 'Краснодар, Россия',
          period: '2008 - 2019'
        },
        {
          id: 2,
          title: 'Университет ИТМО',
          place: 'Санкт-Петербург, Россия',
          period: '2019 - 2023'},
        {
          id: 3,
          title: 'Инсбрукский университет имени Леопольда и Франца',
          place: 'Инсбрук, Австрия',
          period: 'март 2022 - июль 2022'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
.social a {
  text-align: center;
  width: 48px;
  height: 48px;
  float: left;
  background: azure;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px teal, inset 0 0 50px azure;
  border-radius: 24px;
  margin: 0 10px 10px 0;
  padding: 6px;
  color: #000;
  display: block;
}
.social a:hover {
  background: white;
  color: #3a7999;
  box-shadow: inset 0 0 0 3px white;
}

</style>