<template>
      <main-header @hideSelect="hideSelect"/>
      <ServicesPage :bcColor="bcColor"/>
    
</template>

<script>
import MainHeader from '../components/header/MainHeader.vue';
import ServicesPage from '../components/partials/ServicesPage.vue';
import mixin from '../js/index';

export default{
      components:{
            MainHeader,ServicesPage
      },
      mixins:[mixin]
      
}
</script>
