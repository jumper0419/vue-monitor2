<template>
  <el-menu-item  class="side-bar-item" @click="sideIconClick">
    <i :class="item.icon ? item.icon : ''">{{item.title}}</i>
  </el-menu-item>
</template>

<script>
export default {
  name: "SideBarItem",
  props: {
    item: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      sideIconClick() {
        console.log("sideIcon被点击");
      }
    }
  }
}
</script>

<style scoped>

</style>
