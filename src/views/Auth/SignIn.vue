<template>
  <div class="container">
    <div class="login">
      <img src="@/assets/logo.svg" alt="logo" />

      <h4>Sign in to Easybuoy HQ</h4>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
};
</script>

<style lang="scss" scoped>
@import "../../global-styles/colors";

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login {
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
  width: 100%;
  font-size: 20px;
  color: $white;
  padding-left: 20px;
  margin-top: 20px;
}
</style>
