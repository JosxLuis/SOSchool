
<template>
    <div class="sidebar">
        <div class="back">
            <router-link to="/">←</router-link>
        </div>

        <h2>{{room}}</h2>
        <ul>
            <li>Estado general:
                <span :class="status == 'Seguro' ? 'safe' : status == 'Inseguro' ? 'unsafe' : 'punsafe'">
                    {{status}}
                </span>
            </li>
            <li>Registro de usuarios: </li>
            <ul>
                <li v-for="log in logs" :key="log.id">
                    {{ log.room }} :  
                    <span :class="log.status == 'Seguro' ? 'safe' : log.status == 'Inseguro' ? 'unsafe' : 'punsafe'">
                        {{log.status}}
                    </span>
                    hace 
                    {{this.dateNow()-log.date}} min
                </li>
            </ul>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Room',
        data(){
            return{
                room:'',
                status:'',
                id : Number,
            }
        },

        created(){
            this.id = this.roomId;
        },
        beforeUpdate(){ 
            this.logs = this.matchData()
            this.rooms.map((room) => {
                if(room.id === this.id){
                    this.room = room.name 
                    this.status = room.status
                }
            });  
        },       
        computed:{
            roomId(){
                return parseInt(this.$route.params.id)
            },
        },
        methods: {
            matchData(){
                let registros = []
                this.logs.map((log) => {
                    var object = {
                        id: "",
                        room: "",
                        status: "",
                        date: ""
                    }

                    if(log.roomId === this.id){
                        object.id = log.id
                        object.date = log.date
                        this.rooms.map((room) => {
                            if(room.id === log.roomId){
                                object.room = room.name 
                            }
                        });
                        this.status.map((status) => {
                            if(status.id === log.statusId){
                                object.status = status.name
                            }
                        });
                        registros.push(object)
                    }  
                });
                return registros
            }
        }
        
    }
</script>

<style scoped>

    h2{
        font-weight: bold;
    }

    .back{
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        margin-left: 10px;
        background: #f2f2f2;
        text-align: center;
    }
    a{
        text-decoration: none; 
        font-size: 1.5em;
        line-height: 1.7em;
        font-weight: bold;
        color:#000000;
        
        
    }

    span{
        font-weight: 500 !important;
    }

    a:hover{
        color: green;;
    }

    .back:hover{
        background: #cccccc;
        transition: 0.3s;
    }

    ul li{
        font-weight: 400;
    }

    p{
        font-size: 10px;
    }
    
    .safe{
        color: green;
    }
    .unsafe{
        color: red;
    }
    .punsafe{
        color: orange;
    }
</style>