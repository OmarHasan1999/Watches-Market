<template>
    
    <header class="main">
      <router-link to="/" class="logo">Vatan Store Watches</router-link>
        <nav @click="optionClick">
          <span v-show="option"><i class="fa fa-bars"></i></span>
          <span v-show="!option"><i class="fa fa-xmark"></i></span>
        </nav>
     </header>
     <div class="mainLinks" v-show="!option">
           <router-link class="allLinks" to="/">Watches</router-link>
           <router-link class="allLinks" to="/About">About</router-link>
           <router-link class="allLinks" to="/Services">Services</router-link>
           <router-link class="allLinks" to="/Contact">Contact</router-link>
           <router-link class="allLinks" to="/Subscribe">Subscribe</router-link>
           <p class="lang">English</p>
          <hr class="hrLang">
          <p class="chine">诶弟</p>
     </div>


</template>

<script>
  export default{
    data() {
      return {
        option:true,
      }
    },
    methods: {
      optionClick(){
        this.option = !this.option
        this.$emit("hideSelect")
      },
      
    },
   
    
  }
</script>



<style lang="">

</style>
    
    






    




