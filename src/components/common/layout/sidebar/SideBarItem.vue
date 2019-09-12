<template>

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
    }
  }
</script>

<style scoped>

</style>
