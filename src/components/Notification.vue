<template>
  <transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutRight"
  >
    <div
      class="bubble"
      v-show="show"
      :class="{ success: success, danger: !success }"
    >
      <div class="message">{{ text }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Notification",
  props: {
    text: String,
    success: Boolean
  },
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;

    setTimeout(() => {
      this.show = false;
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
.bubble {
  border-radius: 6px;
  position: absolute;
  top: 10%;
  padding: 5px 10px 5px 10px;
}

.success {
  background-color: $success;
}

.danger {
  background-color: $danger;
}
.message {
  @include medium-text;
  color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
