<template>
    <div>
        <!-- <b-button v-b-modal.modal-1>Modal</b-button> -->
        <b-modal id="modal-1" title="Selección de estado" hide-footer>
            <p class="my-4">Estado de {{ this.name }}:</p>

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
                name: '',
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
        updated(){
            this.nameRoom()
        },
        methods:{
            createPost(roomId, statusId){
                this.formData.roomId = roomId
                this.formData.statusId = statusId
                this.formData.date = this.dateNow()
                axios.post('http://localhost:3000/logs', this.formData)
                    .then( response => {
                        console.log("response", response)
                    })
                    .catch( e => console.log(e))  
            },
            hideModal() {
                this.$bvModal.hide(1)
            },
            nameRoom(){
                this.rooms.map((room) => {
                    if(room.id == this.message){
                        this.name = room.name
                    }
                });

            }
            
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