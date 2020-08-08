<template>
  <div id="nav">
    <div class="nav-1">
      <img src="@/assets/logo.svg" alt="logo" />
      <router-link
        to="/"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >Home</router-link
      >
      <router-link to="/manage">Manage Users</router-link>
      <router-link to="/about">About</router-link>
    </div>

    <a @click="onClick"><img src="@/assets/logout.svg" /> Logout</a>
  </div>
</template>

<script>
import { auth } from "@/main";

export default {
  name: "Header",
  methods: {
    onClick() {
      const user = auth.currentUser();
      user
        .logout()
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userLoggedOut: true,
            },
          });
        })
        .catch((err) => alert(err));
    },
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $super-dark-blue;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 15%;

  a {
    font-weight: bold;
    color: $dark-gray;

    &.router-link-exact-active.dark-nav {
      color: $white;
    }

    &.router-link-exact-active.light-nav {
      color: $middle-blue;
    }
  }
}

.nav-1 {
  display: flex;
  align-items: center;

  img {
    width: 100px;
    /* height: 100px; */
    margin-right: 20px;
  }

  a {
    margin: 0 20px;
  }
}
</style>
