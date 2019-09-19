<template>
  <div id="app">
    <v-head></v-head>
    <div class="content">
      <v-side></v-side>
      <router-view/>
    </div>
  </div>
</template>

<script>
import vHead from "components/content/layout/Head";
import vSide from "components/content/layout/Side";

export default {
  name: 'app',
  components: {
    vHead,
    vSide
  }
}
</script>

<style>
  @import "assets/css/base.css";

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    float: left;
  }
</style>
