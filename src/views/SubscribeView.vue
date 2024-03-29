<template lang="">
    <MainHeader @hideSelect="hideSelect"/>
    <SubscribePage :bcColor="bcColor"/>
</template>
<script>
import MainHeader from '../components/header/MainHeader.vue';
import SubscribePage from '../components/partials/SubscribePage.vue';
import mixin from '../js/index';

export default {
    components:{
        MainHeader,SubscribePage
    },
    mixins:[mixin]

}
</script>
<style lang="">
    
</style>
