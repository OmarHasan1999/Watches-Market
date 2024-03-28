<template lang="">
    <div class="about" :style="{'background-color' : bcColor}">
        <h4>About Us</h4>
        <p>
            Based in GazIantep, Turkey, Vatan Store is a platform for those seeking a curated selection of fine<br> mechanical watches,
             a bespoke set of services and expert advice.<br><br>

            We understand that buying and selling pre-owned watches can be a daunting experience,
             even for<br> seasoned collectors. As qualified watchmakers, we do the hard work for you,
              inspecting, researching and<br> describing every watch in detail so that you can buy and sell with confidence.<br><br>

            We believe that having skin in the game is essential, so we named the company using our own surnames to <br>put our
             reputation on the line and demonstrate our commitment to what we do. Our goal is to establish<br> enduring, 
             mutually beneficial connections that extend beyond the typical business-client dynamic.<br><br>

            Vatan Store is a licensed second-hand dealer (License no: 2PS24282) and all transactions comply<br>
             with the Second-Hand Dealers Act.
        </p>
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