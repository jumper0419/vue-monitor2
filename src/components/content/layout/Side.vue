<template>
  <div class="side">
    <side-bar v-for="item in items">
      <side-bar-item :item="item"></side-bar-item>
    </side-bar>
  </div>
</template>

<script>
import SideBar from 'components/common/layout/sidebar/SideBar';
import SideBarItem from 'components/common/layout/sidebar/SideBarItem';

export default {
  name: "Side",
  components: {
    SideBar,
    SideBarItem
  },
  data() {
    return {
      items: [
        {
          icon: 'fa fa-home fa-lg',
          title: '系统首页'
        },
        {
          icon: 'fa fa-th-list fa-lg',
          title: '监控项'
        },
        {
          icon: 'fa fa-cog fa-lg',
          title: '设置'
        }
      ]
    }
  }
}
</script>

<style>
  .side {
    width: 200px;
    height: 100%;
    background: #3a3f51;
    color: #ffffff;
    overflow-y: auto;
  }
</style>