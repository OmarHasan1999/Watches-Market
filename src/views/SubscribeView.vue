<template lang="">
    <MainHeader @hideSelect="hideSelect"/>
    <SubscribePage :bcColor="bcColor"/>
</template>
<script>
import MainHeader from '../components/header/MainHeader.vue';
import SubscribePage from '../components/partials/SubscribePage.vue';

export default {
    components:{
        MainHeader,SubscribePage
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
