<template>
    <div class="sidebar">
        <h2>Salones</h2>
        <ul>
            
            <li v-for="room in rooms" :key="room.id">
                <!-- <router-link :to="`/classroom/${room.id}`"> {{ room.name }} </router-link> -->
                
                <router-link :to="{name: 'Classroom', params: {id: room.id}}"> {{ room.name }} </router-link>
                 : 
                <span :class="room.status == 'Seguro' ? 'safe' : room.status == 'Inseguro' ? 'unsafe' : room.status == 'Indefinido' ? 'undefined' : 'punsafe'">
                    {{room.status}}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        created(){
        },
        beforeUpdate(){ 
            //this.logs = this.matchData()
            console.log("Before Update")
        },
        updated(){
            console.log("Updated")
            this.statusChecker()
        },

        methods: {
            matchData(){
                let registros = []
                this.logs.map((log) => {
                    var object = {
                        id: "",
                        room: "",
                        status: ""
                    }
                    object.id = log.id
                    this.rooms.map((room) => {
                        if(room.id === log.roomId){
                            console.log(room.name)
                            object.room = room.name 
                        }
                    });
                    this.status.map((status) => {
                        if(status.id === log.statusId){
                            object.status = status.name
                        }
                    });
                    registros.push(object)
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
    a{
        font-weight: bold;
        color:#000000;
        text-decoration: none; 
    }

    a:hover{
        color: green;;
    }

    span{
        font-weight: 500;
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

    .undefined{
        color: grey;
    }
</style>