<template>
    <div>
        <!-- <b-button v-b-modal.modal-1>Modal</b-button> -->
        <b-modal id="modal-1" title="Selección de estado" hide-footer>
            <p class="my-4">Estado de {{ message }}:</p>
            
            <div class="buttons">
                <b-button class="mt-3" variant="success" block @click="hideModal">Seguro</b-button>
                <b-button class="mt-3" variant="danger" block @click="toggleModal">Inseguro</b-button>
                
            </div>
        
        </b-modal>
    </div>
    
   
</template>

<script>
     export default{
        name: 'Statusmodal',
        props: [
            "message"
        ],
        methods:{

        },
        
    }
</script>



<style>
    p{
        font-family:'Courier New', Courier, monospace;
        font-size: 2em;
        text-align: center;
    }
    .buttons {
        display: flex;
        flex-direction: column
    }
</style>