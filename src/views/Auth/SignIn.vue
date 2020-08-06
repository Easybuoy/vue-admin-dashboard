<template>
  <div class="container">
    <div class="request">
      Don't have a Easybuoy HQ account?
      <router-link to="/request">Request an account</router-link>
    </div>
    <div class="login">
      <img src="@/assets/logo.svg" alt="logo" />

      <h4>Sign in to Easybuoy HQ</h4>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign In</button>

      <router-link to="/recover">Forgot your password? </router-link>

      <button @click="toggleDarkMode()">Toggle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data: () => {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      console.log("a", this.isDarkMode);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../global-styles/colors";

.light-background {
  background-color: $light-gray;
}

.dark-background {
  background-color: $dark-blue;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login {
  width: 400px;
}

h4 {
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  color: $white;
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  height: 60px;
  width: 94%;
  font-size: 20px;
  color: $white;
  padding-left: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

button {
  background: $teal;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: $white;
  margin-top: 20px;
  margin-bottom: 40px;
  cursor: pointer;

  &:hover {
    background: $middle-blue;
  }
}

a {
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
}

.request {
  position: absolute;
  top: 40px;
  right: 40px;
  color: rgba(255, 255, 255, 0.3);

  a {
    color: $white;
  }
}
</style>
