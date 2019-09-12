<template>
  <head-bar class="header" slot="el-header">
    <div slot="head-left" class="head-left">
      <a class="logo" href="/">
            <span class="logo-lg">
              <img src="~assets/img/layout/logo.png" alt="logo" />引擎监控系统
            </span>
      </a>
      <div class="collapse-btn" @click="collapseChange">
        <i v-if="!collapse" class="fa fa-indent fa-lg" aria-hidden="true"></i>
        <i v-else class="fa fa-outdent fa-lg" aria-hidden="true"></i>
      </div>
    </div>
    <div slot="head-center" class="head-center">
      <el-input
          placeholder="请输入内容"
          v-model="input">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div slot="head-right" class="head-right">
      <i class="fa fa-user-circle fa-lg" aria-hidden="true">{{user}}</i>
      <i class="fa fa-sign-out fa-lg" aria-hidden="true">{{layout}}</i>
    </div>
  </head-bar>
</template>

<script>
  import HeadBar from "components/common/layout/HeadBar";
  import bus from 'components/common/bus';

  export default {
    name: "Head",
    components: {
      HeadBar,
      bus
    }
  }
</script>

<style scoped>

</style>
