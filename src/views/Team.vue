<template>
    <div class="team">
        <div class="container">
            <div class="row">
                <div class="project">
                    <div class="title">
                        <h2>SOS<span>chool</span></h2>
                    </div>

                    <div class="description">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis necessitatibus illum dolorem 
                            dicta ipsam odio deleniti similique, fugiat qui eaque libero quam temporibus nisi corporis mollitia 
                            fugit repudiandae eligendi rerum?</p>
                    </div>

                    <div class="technologies">

                    </div>

                    <div class="members">
                        <div class="member">
                            <h3>José Luis Aguilar Nucamendi</h3>
                            <p>lorem ipsum dolor sit</p>
                        </div>
                    </div>

                </div>
                

                <div class="team">

                </div>
                

            </div>
        </div>
        
    </div>
   
</template>

<script>

export default {
    name: 'Team',
}

</script>


<style scoped>
    .team{
        width: 100%;
        height: 800px;
        background: yellow;
    }

    .team .project .title{
        width: 100%;
        min-height: 50px;
        background: blue;
    }

    .team h2{
        font-size: 4em;
        font-weight: bold;
        text-align: center;
        color: red;
    }

    .team .project .description{
        background: red;
    }

    .team .project .description p{
        font-size: 1.5em;
    }
    span{
        font-size: 1.5em;
        font-weight: bold;
        color: black;
    }


</style>