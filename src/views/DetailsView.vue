<template lang="">
    <MainHeader @hideSelect="hideSelect"/>
    <DetailsPage :bcColor="bcColor"/>
</template>
<script>
import DetailsPage from '../components/partials/DetailsPage.vue';
import MainHeader from "../components/header/MainHeader.vue"
import mixin from '../js/index';

export default {
    components:{
        DetailsPage,MainHeader
    },
    mixins:[mixin]


//     data() {
//             return {
//                   bcColor:"white",
//                   color: false,

//             }
//       },
//       methods: {
//             hideSelect(){
//                   this.color = !this.color
//                   this.bcColor = this.color ? "#808080" : "white"
//             },
            
//       },
}
</script>
<style lang="">
    
</style>