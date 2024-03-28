<template lang="">
    <MainHeader @hideSelect="hideSelect"/>
    <AboutPage :bcColor="bcColor"/>
</template>
<script>
import MainHeader from '../components/header/MainHeader.vue'
import AboutPage from '../components/partials/AboutPage.vue';
export default {
    components:{
        MainHeader,AboutPage
    },
    data() {
            return {
                  bcColor:"white",
                  color: false
            }
      },
      methods: {
            hideSelect(){
                  this.color = !this.color
                  this.bcColor = this.color ? "#808080" : "white"
            }
      },
}
</script>
<style lang="">
    
</style>