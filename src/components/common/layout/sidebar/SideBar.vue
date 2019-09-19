<template>
  <div class="side-bar">
    <el-menu background-color="#3a3f51">
      <slot></slot>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  computed: {
    activeMenu() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
</style>
