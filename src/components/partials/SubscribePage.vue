<template lang="">
    <div class="subscribe" :style="{'background-color' : bcColor}">
        <h4>Subscribe</h4>
        <p>Sign up below for weekly updates on new arrivals.</p>
        <input type="email" placeholder="Please enter your email"/>
        <div class="Sign"><i class="fa-regular fa-envelope"></i>Sign Up</div>
        <div class="Sign"><i class="fa-brands fa-instagram"></i>Instagram</div>
        <div></div>
    </div>
</template>


<script>
export default {
    props:{
        bcColor:{
        type :Boolean,
        default: true
        }
    }
}
</script>


<style lang="">
    
</style>