<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <RequestAccount />
    <Notification v-if="hasText" :text="text" :success="isSuccess" />

    <div class="login">
      <img src="@/assets/logo.svg" alt="logo" />

      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Recover Account
      </h4>

      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          required
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        />

        <button>{{ recoverText }}</button>
      </form>
      <router-link
        to="/signin"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
        >Already have an account? Sign in now.
      </router-link>

      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
import Notification from "@/components/Notification";

import { auth } from "@/main";

export default {
  name: "Recover",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  data() {
    return {
      email: null,
      hasText: false,
      text: "",
      recoverText: "Send Email",
      isSuccess: false,
    };
  },
  mounted() {
    const params = this.$route.params;
    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out";
    }
  },
  methods: {
    onSubmit() {
      const { email } = this;
      this.isSuccess = false;
      this.hasText = false;
      this.text = "";
      this.recoverText = "Sending Recovery Email...";

      auth
        .requestPasswordRecovery(email)
        .then(() => {
          this.recoverText = "Send Email";
          this.$router.push({
            name: "signin",
            params: {
              userRecoverdAccount: true,
              email,
            },
          });
        })
        .catch(() => {
          this.recoverText = "Send Email";
          this.hasText = true;
          this.text = `Error sending recovery email!`;
        });
    },
  },
  components: {
    RequestAccount,
    ThemeSwitch,
    Notification,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login {
  width: 400px;
  margin: 0 auto;
  text-align: center;
}
</style>
