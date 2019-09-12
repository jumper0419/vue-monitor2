<template>
  <el-row class="head-bar">
    <el-col :span="8" class="head-left"><slot name="head-left"></slot></el-col>
    <el-col :span="8" class="head-center"><slot name="head-center"></slot></el-col>
    <el-col :span="8" class="head-right"><slot name="head-right"></slot></el-col>
  </el-row>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  .head-bar {
    background-color: #242f42;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    font-size: 22px;
    color: #fff;
  }
</style>
