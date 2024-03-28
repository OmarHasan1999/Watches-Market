<template lang="">
    <div class="services" :style="{'background-color' : bcColor}">
        <h4>Collector Services</h4>


        <div class="serviceOne" :style="{ 'height' : showPar ? '25vh' : '10vh' }">
           <h4 @click="showPlus = !showPlus, showPar = !showPar" 
           :style="{ 'margin-top' : showPar ? '-11vh' : '5vh' }"
           >Sell Your Watch
           </h4>
           <h3 @click="showPlus = !showPlus, showPar = !showPar" class="plus" v-show="showPlus"
               :style="{ 'margin-top' : showPar ? '10vh' : '0.4vh' }">+
           </h3>
           <h3 @click="showPlus = !showPlus, showPar = !showPar" class="plus" v-show="!showPlus">-</h3>
           <p v-show="showPar">
            Vatan Store is always looking to purchase new watches. 
            If you have a watch you are interested in selling, please send us 
            a detailed description of the watch along with accompanying photographs 
            and we will get back to you promptly to discuss.<br> We offer fast and competitive 
            settlements for quality watches.
           </p>
        </div>


        <div class="serviceTwo" :style="{ 'height' : showParTwo ? '25vh' : '10vh' }">
           <h4 @click="showPlusTwo = !showPlusTwo, showParTwo = !showParTwo" 
           :style="{ 'margin-top' : showParTwo ? '-12vh' : '4vh' }">Consignment
           </h4>
           <h3 class="plusTwo" @click="showPlusTwo = !showPlusTwo, showParTwo = !showParTwo" v-show="showPlusTwo" 
           :style="{ 'margin-top' : showParTwo ? '10vh' : '0.4vh'  }">+
           </h3>
           <h3 class="plusTwo" @click="showPlusTwo = !showPlusTwo, showParTwo = !showParTwo" v-show="!showPlusTwo">-</h3>
           <p v-show="showParTwo">
            International shipping, insurance and tax are all paid from our portion of the fees.
            vatan store <br> handles all pre and post sales enquiries so that you can sell your watch and move on with peace of mind.<br>

            Watches sold via consignment are held by vatan store for a three month listing period.
           </p>
        </div>


        <div class="serviceThree" :style="{ 'height' : showParThree ? '25vh' : '10vh' }">
           <h4  @click="showPlusThree = !showPlusThree, showParThree = !showParThree"
           :style="{ 'margin-top' : showParThree ? '-12vh' : '4vh' }"
           >Watch Sourcing
           </h4>
           <h3 class="plusThree" @click="showPlusThree = !showPlusThree, showParThree = !showParThree" v-show="showPlusThree" 
           :style="{ 'margin-top' : showParThree ? '10vh' : '0.4vh'  }"
           >+
           </h3>
           <h3 class="plusThree" @click="showPlusThree = !showPlusThree, showParThree = !showParThree" v-show="!showPlusThree"
           >-</h3>
           <p v-show="showParThree">
            Through our industry contacts we can source particular watches in the international market, 
            inspect them for quality and authenticity, and manage all transactional negotiations and shipping.
            Please note we do not source watches with a market value less than AUD $50,000.
           </p>
        </div>



        <div class="serviceFour" :style="{ 'height' : showParFour ? '25vh' : '10vh' }">
           <h4 @click="showPlusFour = !showPlusFour, showParFour = !showParFour"
           :style="{ 'margin-top' : showParFour ? '-1vh' : '15vh' }"
           >Appraisals & Valuations
           </h4>
           <h3 class="plusFour" @click="showPlusFour = !showPlusFour, showParFour = !showParFour" v-show="showPlusFour" 
           :style="{ 'margin-top' : showParFour ? '10vh' : '-0.5vh'  }"
           >+
           </h3>
           <h3 class="plusFour" @click="showPlusFour = !showPlusFour, showParFour = !showParFour" v-show="!showPlusFour">
            -</h3>
           
           <p v-show="showParFour">
            Your watch will be closely inspected, documented, professionally photographed and a detailed report will be produced.
            We tailor each appraisal and valuation to the watch and your individual requirements.
            Our scholarship and expertise allows us to 
            offer the highest level of service with a strict policy of privacy and confidentiality.
           </p>
        </div>

    </div>
</template>


<script>
export default {
    data() {
        return {
            showPar:false,
            showPlus:true,
            showParTwo:false,
            showPlusTwo:true,
            showParThree:false,
            showPlusThree:true,
            showParFour:false,
            showPlusFour:true,
        }
    },
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