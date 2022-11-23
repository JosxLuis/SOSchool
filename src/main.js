import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import './style.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


const GlobalVariables = {
    data(){
        return {
            base_url: 'http://localhost:3000/db',
            logs: [],
            rooms: [],
            status: [],
        }
    },
    created(){
        this.getData()
        this.statusChecker()
    },
    mounted(){
    },
    beforeUpdate(){ 
        this.statusChecker()

    },
    updated(){
        
        //this.getData()
    },

    methods:{
        getData(){
            axios
                .get(this.base_url)
                    .then( response => {
                        // console.log("response", response.data)
                        this.logs = response.data.logs
                        this.rooms = response.data.rooms
                        this.status = response.data.status
                    })
                    .catch( e => console.log(e))  
        },
        put(room, status){
            axios.put('http://localhost:3000/rooms/' + room.id,
                {
                    id: room.id,
                    name: room.name,
                    status:  status
                }  
            )
            .then( response => {
                console.log("response", response)
            })
            .catch( e => console.log(e)) 
        },
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
        statusChecker(){
            var today = this.dateNow()

            this.rooms.map((room) => {      
                let safe = 0
                let unsafe = 0
                var timeRecect = 0
                
                this.logs.map ( (logs) => {
                    if (logs.roomId === room.id){

                        if(timeRecect<logs.date){
                            timeRecect = logs.date
                        }

                        console.log("time", timeRecect)
                        if(logs.statusId == 1){
                            safe = safe+1;
                        }
                        if(logs.statusId == 2){
                            unsafe = unsafe+1;
                        }

                        if(safe == 0 && unsafe == 0){
                            
                        }else{
                            if(safe >= 10 && unsafe == 0){
                                console.log("Soy safe")
                                this.put(room, "Seguro")
                            }

                            if(unsafe >= 1){
                                this.put(room, "Inseguro")
                            }
                        }

                        console.log("todat", today)
                        console.log("timerect", timeRecect)
                        console.log("operacion", today-timeRecect)

                        if((today-timeRecect) >= 2){
                            this.put(room, "Problamente Inseguro")
                        }
                    }
                });
                console.log("SAFE", safe)
            });
        }
    }
}


const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mixin(GlobalVariables)
app.mount('#app')

