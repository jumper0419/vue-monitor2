<template>
  <div class="side-bar">
    <el-scrollbar>
      <el-menu
          :default-active="activeMenu"
          class="sidebar-el-menu"
          background-color="#3a3f51"
          text-color="#b5b6bd"
          active-text-color="rgb(79, 148, 212)"
          mode="vertical"
      >
        <slot></slot>
      </el-menu>
    </el-scrollbar>
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
.side-bar {
  margin: 0px;
  padding: 0px;
  /* overflow-y: scroll; */
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
</style>
