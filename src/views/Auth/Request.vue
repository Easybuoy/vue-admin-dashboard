<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <div class="login">
      <img src="@/assets/logo.svg" alt="logo" />

      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Request Account
      </h4>

      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          required
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        />

        <button>Request Account</button>
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
import ThemeSwitch from "@/components/ThemeSwitch";

import config from "../../config";

export default {
  name: "Request",
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

      // Slack API Logic
      let slackURL = new URL(config.VUE_APP_SLACK_URL);
      console.log(config.VUE_APP_SLACK_TOKEN);
      const data = {
        token: config.VUE_APP_SLACK_TOKEN,
        channel: "hq",
        text: `${email} has requested admin access to Easybuoy HQ. Please go to Netlify to invite them`,
      };

      slackURL.search = new URLSearchParams(data);

      fetch(slackURL)
        .then((res) => res.json())
        .then(() => {
          this.$router
            .push({
              name: "signin",
              params: {
                userRequestedAccount: true,
                email,
              },
            })
            .catch((err) => alert(err));
        });
    },
  },
  components: {
    ThemeSwitch,
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
