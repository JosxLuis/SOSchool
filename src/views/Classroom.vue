
<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8">
                <Schoolmap />
            </div>
            <div class="col-12 col-lg-4">
                <Room />
                <Modal />
            </div>
        </div>
    </div> 
    
    <!-- <main class="sidebar">
        <nav class="retroceso">
            <router-link to="/" class="retroceso">← Regresar al Directorio</router-link>
        </nav>
        <h2>Salón #</h2>
        <ul>
            <li>Información:</li>
            <li>Estado: Seguro</li>
            <li>Zona segura más cercana: Cafeteria </li>

        </ul>
        <div>
            
        </div>
    </main> -->
</template>

<script>

    import Schoolmap from '../components/Schoolmap.vue'
    import Room from '../components/Room.vue'
    import Modal from '../components/Statusmodal.vue'
    export default{
        name: 'Classroom',
        components:{
            Schoolmap,
            Room,
            Modal
        },
    }
</script>
    


<style>



</style>