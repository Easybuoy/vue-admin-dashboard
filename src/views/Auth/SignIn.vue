<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <Notification v-if="hasText" :text="text" />
    <RequestAccount />

    <div class="login">
      <img src="@/assets/logo.svg" alt="logo" />

      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign in to Easybuoy HQ
      </h4>

      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          required
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        />
        <input
          type="password"
          required
          placeholder="Password"
          v-model="password"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        />
        <button>Sign In</button>
      </form>
      <router-link
        to="/recover"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
        >Forgot your password?
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
  name: "SignIn",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: "",
    };
  },
  mounted() {
    const params = this.$route.params;
    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out";
    } else if (params.userRecoverdAccount) {
      this.hasText = true;
      this.text = `A recovery email has been sent to ${params.email}`;
    } else if (params.userRequestedAccount) {
      this.hasText = true;
      this.text = `Your request has been sent to an administrator for ${params.email}`;
    }
  },
  methods: {
    onSubmit() {
      const { email, password } = this;

      auth
        .login(email, password, true)
        .then(() => {
          this.$router.replace("/");
        })
        .catch((err) => console.log(err));
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
  text-align: center;
  margin: 0 auto;
}
</style>
