<template lang="">
    <div class="detailPage" :style="{'background-color' : bcColor}">
        <div class="sectionOne">
            <h3>{{ $route.params.brand }}</h3>
            <p>{{ $route.params.model }}</p>
            <span>{{ $route.params.modelNum }}</span>
            <p>{{ $route.params.price }}</p>
            <button class="buyNow"><i class="fa fa-cart-shopping"></i>Buy Now</button>
            <h4>Enquire</h4>
                <button class="enqOne"><i class="fa-brands fa-whatsapp"></i> WhatsApp</button>
                <button class="enqTwo"><i class="fa-regular fa-envelope"></i><span>Email</span></button>
        </div>

        <div class="sectionTwo">
            <img :src="mainImg" class="mainImg"/>
            <div class="containerImg">
              <div class="miniImg">
                <img v-for="item in imgGroup" :key="item.id" :src="item.img" @click="changeImg(item.img)"/>
              </div>
            </div>
            <h3 class="detailHeading">Details</h3>
            <div class="theDetails">
                <div class="firstList">
                    <ul v-for="list in jsonInfo.allWatches[0].listOfDetails" :key="list.id">
                        <li>{{ list }}</li>
                    </ul>
                </div>
                <div class="secondList">
                    <ul>
                        <li>{{ $route.params.SKU }}</li>
                        <li>{{ $route.params.model }}</li>
                        <li>{{ $route.params.modelNum }}</li>
                    </ul>
                    <ul v-for="listTwo in jsonInfo.allWatches[1].listTwo" :key="listTwo.id">
                        <li>{{ listTwo }}</li>
                    </ul>
                </div>
            </div>
            <h3 class="Description">Description</h3>
            <p class="descParagraph" v-for="desc in jsonInfo.allWatches.slice(0,4)" :key="desc.id">
                {{ desc.description }} <br><br></p>
            <h3 class="Description">Accessories</h3>
            <p class="descParagraph">{{ jsonInfo.allWatches[0].Accessories }}</p>
            <h3 class="Description">Condition</h3>
            <p class="descParagraph">{{ jsonInfo.allWatches[0].Condition }}</p>
            <h3 class="Description">Warranty</h3>
            <p class="descParagraph">{{ jsonInfo.allWatches[0].Warranty }}</p><br>
        </div>
    </div>

    <div v-show="fullView" class="fullView">
       <span @click="fullView= false ,closeImg= false"  v-show="closeImg">
          <i class="fa fa-xmark" id="closeImg"></i>
       </span>
       <span @click="nextImg"><i class="fa fa-arrow-right" id="right"></i></span>
       <span @click="prevImg"><i class="fa fa-arrow-left" id="left"></i></span>
       <img class="grandImg" :src="grandSrc"/>
    </div>
    
    

</template>



<script>
import jsonData from "../../data/data.json"
export default {
    data() {
        return {
            jsonInfo: jsonData,
            imgGroup:[],
            mainImg : this.$route.params.img,
            fullView: false,
            grandImg: false,
            closeImg: false,
            grandSrc: "",
            indexImg: 0
        }
    },
    mounted() {
      this.imgGroup = JSON.parse(this.$route.params.imgGroup)
    },
    methods: {
        changeImg(src){
            this.grandSrc = src
            this.fullView= true
            this.closeImg= true
        },
        nextImg(){
            this.indexImg = (this.indexImg + 1) % this.imgGroup.length
            this.changeImg(this.imgGroup[this.indexImg].img)
        },
        prevImg(){
            this.indexImg =  (this.indexImg - 1 + this.imgGroup.length) % this.imgGroup.length 
            this.changeImg(this.imgGroup[this.indexImg].img)
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