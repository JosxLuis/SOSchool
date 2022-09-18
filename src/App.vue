<template>
  <div>
      <Schoolmap />
      
  </div>
</template>

<script>
  import Schoolmap from './components/Schoolmap.vue'
  import Sidebar from './components/Sidebar.vue'
  export default{
    name: 'App',
    components:{
      Schoolmap,
      Sidebar,
    },
  }
</script>

<style>
</style>


