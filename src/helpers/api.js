module.exports.getData = function(){
    
    axios
        .get('http://localhost:3000/db')
            .then( response => {
                console.log("response", response.data)
                this.logs = response.data.logs
                this.rooms = response.data.rooms
                this.status = response.data.status
            })
            .catch( e => console.log(e))  
   

}