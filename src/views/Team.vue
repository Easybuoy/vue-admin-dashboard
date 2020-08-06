<template>
  <div class="container">
    <h2>Team</h2>

    <div class="cards">
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a href="" class="card card-1"> </a
      ></transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a href="" class="card card-2"> </a
      ></transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a href="" class="card card-3"> </a
      ></transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a href="" class="card card-4"> </a
      ></transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a href="" class="card card-5"> </a
      ></transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
};
</script>

<style lang="scss" scoped>
.container {
  margin-left: 25px;
}

h2 {
  @include heading-2;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

.card {
  height: 50px;
  width: 50px;
  background: red;
  margin: 20px;
}

.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}
.card-4 {
  animation-delay: 1.5s;
}
.card-5 {
  animation-delay: 2s;
}
</style>
