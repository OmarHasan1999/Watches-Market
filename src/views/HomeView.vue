<template>
    <main-header @hideSelect="hideSelect"/>
    <HomePage :showSelect="showSelect" :style="{ 'backgroundColor' : showSelect ? 'white' : '#808080' }"/>
     
  
</template>

<script>
  import mainHeader from "../components/header/MainHeader.vue"
  import HomePage from '../components/partials/HomePage.vue';
  export default{
    components:{
      mainHeader,HomePage
    },
    data() {
      return {
        showSelect:true
      }
    },
    methods: {
      hideSelect(){
        this.showSelect = !this.showSelect
      }
    },
  }
 
</script>

<style>

</style>


