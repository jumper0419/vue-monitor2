<template>
  <layout class="layout">
  </layout>
</template>

<script>
  import Layout from "components/common/layout/Layout";
  import bus from 'components/common/bus';

  export default {
    name: "index",
    components: {
      Layout,
      bus
    },
    data() {
      return {
        collapse: false,
        layout: '退出',
        user: '唐娟'
      }
    },
    methods: {
      collapseChange() {
        console.log(this.collapse);
        this.collapse = !this.collapse;
        bus.$emit('collapse', this.collapse);
      }
    },
    mounted() {
      if (document.body.clientWidth < 1500) {
        this.collapseChange();
      }
    }
  }
</script>

<style scoped>

</style>
