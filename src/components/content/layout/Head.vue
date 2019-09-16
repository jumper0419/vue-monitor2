<template>
  <head-bar class="header" slot="el-header">
    <div slot="head-left" class="head-left">
      <a class="logo" href="/">
        <img src="~assets/img/layout/logo.png" alt="logo" />引擎监控系统
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
      <i class="fa fa-user-circle fa-lg" aria-hidden="true" @click="userBtnClick">{{user}}</i>
      <i class="fa fa-sign-out fa-lg" aria-hidden="true" @click="exitBtnClick">{{layout}}</i>
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
  },
  data() {
    return {
      collapse: false,
      user: '唐娟',
      layout: '退出',
      input: ''
    }
  },
  methods: {
    collapseChange() {
      console.log(this.collapse);
      this.collapse = !this.collapse;
      bus.$emit('collapse', this.collapse);
    },
    userBtnClick() {
      console.log("userBtnClick被执行");
    },
    exitBtnClick() {
      console.log("exitBtnClick被执行");
    }
  }
}
</script>

<style scoped>
.head-left, .head-center, .head-right {
  display: flex;
  line-height: 60px;
  white-space: nowrap;
}

.head-center, .head-right {
  float: right;
  padding: 0 20px;
}


.head-left .logo, .collapse-btn {
  color: aliceblue;
  padding: 0 20px;
}

.logo img {
  height: 40px;
  width: 40px;
  vertical-align: middle;
  padding-right: 10px;
  white-space:nowrap;
}

.head-center {
  width: 200px;
}

.head-right {
  padding: 20px;
}

  .head-right i {
  margin-right: 10px;
  font-size: 18px;
  padding: 3px;
}
</style>
