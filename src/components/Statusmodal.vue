<template>
    <div>
        <!-- <b-button v-b-modal.modal-1>Modal</b-button> -->
        <b-modal id="modal-1" title="Selección de estado" hide-footer>
            <p class="my-4">Estado de {{ message }}:</p>

            <div class="buttons"> 
                <b-button class="mt-3" variant="success" block @click="createPost(message, 1);">Seguro</b-button>
                <b-button class="mt-3" variant="danger" block @click.prevent="createPost(message, 2)">Inseguro</b-button>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import axios from 'axios'
    import Sidebar from './Sidebar.vue'
    export default{
        name: 'Statusmodal',
        data(){
            return {
                formData: {
                    id: '',
                    roomId: '',
                    statusId: '',
                    date: '',
                },
            }
        },
        props: [
            "message"
        ],
        methods:{
            dateNow(){
                const currentDate = new Date();
                const timestamp = currentDate.getTime();
                return timestamp
            },
            createPost(roomId, statusId){
                
                this.formData.date = this.dateNow()
                this.formData.roomId = roomId
                this.formData.statusId = statusId
                axios.post('http://localhost:3000/logs', this.formData)
                    .then( response => {
                        console.log("response", response)
                    })
                    .catch( e => console.log(e))  
            },
            hideModal() {
                this.$bvModal.hide(1)
            },
            
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