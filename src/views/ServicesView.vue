<template>
      <main-header @hideSelect="hideSelect"/>
      <ServicesPage :bcColor="bcColor"/>
    
</template>

<script>
import MainHeader from '../components/header/MainHeader.vue';
import ServicesPage from '../components/partials/ServicesPage.vue';

export default{
      components:{
            MainHeader,ServicesPage
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
