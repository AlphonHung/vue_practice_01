<template>
  <div>
    <navbar></navbar>
    <div class="wrapper">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './navbar';
export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}
</style>
