<template>
  <div>
    <itemcontaier father-component="item"></itemcontaier>
  </div>
</template>

<script>
  
  import itemcontaier from '../../common/itemcontainer.vue'

  export default {
    name: 'item',
    components: {
      itemcontaier
    },
    created() {
      this.$store.commit('REMBER_TIME')
    }
  }
</script>

<style lang="less">
  
</style>