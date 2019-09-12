<template>
  <el-container class="el-container">
    <el-header class="el-header"><slot name="el-header"></slot></el-header>
    <el-container class="el-container">
      <el-aside class="el-aside" width="200px"><slot name="el-aside"></slot></el-aside>
      <el-main class="el-main"><slot name="el-main"></slot></el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "Layout"
  }
</script>

<style scoped>
  .el-header {
    background-color: #242f42;
    color: #fff;
    font-size: 20px;
    line-height: 50px;
  }

  .el-aside {
    background-color: #324157;
    color: #fff;
    line-height: 200px;
    font-size: 18px;
  }

  .el-main {
    color: #333;
    line-height: 160px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
