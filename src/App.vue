<template>
  <div id="app">
    <head-bar></head-bar>
    <router-view/>
  </div>
</template>

<script>
import Head from "components/content/layout/Head";
import HeadBar from "./components/common/layout/HeadBar";

export default {
  name: 'app',
  components: {
    Head,
    HeadBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
