<template lang="">
    <MainHeader @hideSelect="hideSelect"/>
    <AboutPage :bcColor="bcColor"/>
</template>
<script>
import MainHeader from '../components/header/MainHeader.vue'
import AboutPage from '../components/partials/AboutPage.vue';
import mixin from '../js/index';
export default {
    components:{
        MainHeader,AboutPage
    },
    mixins:[mixin]
}
</script>
<style lang="">
    
</style>