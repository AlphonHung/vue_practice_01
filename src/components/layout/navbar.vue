<template>
  <div class="navbar">
    <router-link to="/">
      <img class="navbar-logo" alt="logo" src="../../assets/logo.png" />
    </router-link>
    <div class="menu">
      <router-link class="menu-link" to="/home">系統介紹</router-link>
      <a class="menu-link" href="www.google.com.tw">進入系統</a>
      <div class="menu-divider" />
      <router-link class="menu-link" to="/about">康百事</router-link>
      <a class="menu-link" href="www.google.com.tw" target="_blank">公益活動</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    currentPath() {
      return this.$route.path;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.15);

  .navbar-logo {
    width: 50px;
    height: 30px;
    @include mobile{
      display: none;
    }
  }

  .menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .menu-link {
      margin: 0 15px;
      padding: 3px 2px;
      font-size: 0.8rem;
      text-decoration: none;
      color: rgb(160, 160, 160);

      &.active {
        color: rgb(45, 45, 45);
        border-bottom: 1px solid blue;
      }
    }

    .menu-divider {
      width: 1px;
      height: 20px;
      background-color: black;
      margin: 0 15px;
    }
  }
}
</style>
