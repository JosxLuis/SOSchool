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
        statusChecker(){

            
            this.rooms.map((room) => {     
                let safe, unsafe, so;      
                this.logs.map ( (logs) => {
                    console.log("log: ",logs)
                    if (logs.roomId === room.id){
                        switch(logs.statusId){
                            case 1:
                                safe ++;
                            case 2:
                                unsafe --;
                            case 3:
                                so++;
                        }
                        console.log("filter: ",logs.roomId)
                    }
                });

            });


        }
    }
}


const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mixin(GlobalVariables)
app.mount('#app')

