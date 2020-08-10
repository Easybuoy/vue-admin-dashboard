<template>
  <div id="nav" :class="{ 'nav-light': !isDarkMode, 'nav-dark': isDarkMode }">
    <div class="nav-1">
      <router-link
        to="/"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
      >
        <img src="@/assets/logo.svg" alt="logo"
      /></router-link>
      <router-link
        to="/"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >Home</router-link
      >
      <!-- <router-link
        to="/manage"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >Manage Users</router-link
      > -->
      <router-link
        to="/team"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >Team</router-link
      >
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
.nav-light {
  background: $white;
}

.nav-dark {
  background: $super-dark-blue;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

    &:hover {
      cursor: pointer;
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
