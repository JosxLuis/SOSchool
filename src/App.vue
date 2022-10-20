<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-8">
        <Schoolmap />
      </div>
      <div class="col-12 col-lg-4">
        <Sidebar />
        <Modal />
      </div>
    </div>
  </div>
</template>

<script>
  import Schoolmap from './components/Schoolmap.vue'
  import Sidebar from './components/Sidebar.vue'
  import Modal from './components/Statusmodal.vue'
  export default{
    name: 'App',
    components:{
      Schoolmap,
      Sidebar,
      Modal
    },
  }
</script>

<style>


</style>


