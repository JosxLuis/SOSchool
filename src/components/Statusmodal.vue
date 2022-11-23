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
            getFullMinutes(){
                var today = new Date();
                if (today.getMinutes() < 10) {
                    return '0' + today.getMinutes();
                }
                return today.getMinutes();
            },
            dateNow(){
                var today = new Date();
                //+ ":" + today.getSeconds();
                var time = today.getHours() + "" + this.getFullMinutes() 
                return time
            },
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