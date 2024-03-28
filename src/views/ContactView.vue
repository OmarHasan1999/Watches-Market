<template lang="">
    <MainHeader @hideSelect="hideSelect"/>
    <ContactPage :bcColor="bcColor"/>
</template>

<script>
import MainHeader from '../components/header/MainHeader.vue'
import ContactPage from '../components/partials/ContactPage.vue';
export default {
    components:{
        MainHeader,ContactPage
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