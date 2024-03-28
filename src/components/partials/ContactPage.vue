<template lang="">
    <div class="contact" :style="{'background-color' : bcColor}">
        <h4>Contact Us</h4>
        <div class="address">
            <p>Bligh Chambers, 6/25 Bligh St, Sydney NSW 2000.<br><br>
               11am - 5pm, Monday - Thursday.<br><br>
               In-person viewings strictly by appointment only.
            </p>
        </div>
        <div class="contactPhone">
            <p> <i class="fa-brands fa-whatsapp"></i> WhatsApp <br><br>
                <i class="fa fa-phone"></i> +61 472 502 515 <br><br>
                <i class="fa-regular fa-envelope"></i> info@hailwoodpeters.com
            </p>
        </div>
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