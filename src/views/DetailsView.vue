<template lang="">
    <MainHeader @hideSelect="hideSelect"/>
    <DetailsPage :bcColor="bcColor"/>
</template>
<script>
import DetailsPage from '../components/partials/DetailsPage.vue';
import MainHeader from "../components/header/MainHeader.vue"
export default {
    components:{
        DetailsPage,MainHeader
    },
    data() {
            return {
                  bcColor:"white",
                  color: false,

            }
      },
      methods: {
            hideSelect(){
                  this.color = !this.color
                  this.bcColor = this.color ? "#808080" : "white"
            },
            
      },
}
</script>
<style lang="">
    
</style>