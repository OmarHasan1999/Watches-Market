<template lang="">
  
  <div class="homeSection">
    <select v-show="showSelect" name="cars" id="cars" v-model="selectOne">
    <option v-for="brand in brandNames" :key="brand" :value=brand>{{ brand }}</option>
  </select>

  <div class="container">
    <div v-if="selectOne == 'show All'" class="products">
      <div class="watchBox" v-for="watch in theWatches.allWatches" :key="watch.id" 
      @click="detailPage(watch.img,watch.brand,watch.model,watch.price,watch.modelNumber,watch.SKU,watch.imgGroup)">
        <img :src="watch.img"/>
        <div class="brand">
        <h3>{{ watch.brand }}</h3>
        <p>{{ watch.model }}</p>
        <span>{{ watch.price }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="selectOne == 'Rolex'" class="products">
      <div class="watchBox" v-for="watch in theWatches.RolexWatches" :key="watch.id"
      @click="detailPage(watch.img,watch.brand,watch.model,watch.price,watch.modelNumber,watch.SKU,watch.imgGroup)"
    >
        <img :src="watch.img"/>
        <div class="brand">
        <h3>{{ watch.brand }}</h3>
        <p>{{ watch.model }}</p>
        <span>{{ watch.price }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="selectOne == 'Zenith'" class="products">
      <div class="watchBox" v-for="watch in theWatches.ZenithWatches" :key="watch.id"
      @click="detailPage(watch.img,watch.brand,watch.model,watch.price,watch.modelNumber,watch.SKU,watch.imgGroup)">
        <img :src="watch.img"/>
        <div class="brand">
        <h3>{{ watch.brand }}</h3>
        <p>{{ watch.model }}</p>
        <span>{{ watch.price }}</span>
        </div>
      </div>
    </div> 
    <div v-else-if="selectOne == 'Bell&Ross'" class="products">
      <div class="watchBox" v-for="watch in theWatches.BellRossWatches" :key="watch.id"
      @click="detailPage(watch.img,watch.brand,watch.model,watch.price,watch.modelNumber,watch.SKU,watch.imgGroup)">
        <img :src="watch.img"/>
        <div class="brand">
        <h3>{{ watch.brand }}</h3>
        <p>{{ watch.model }}</p>
        <span>{{ watch.price }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="selectOne == 'Omega'" class="products">
      <div class="watchBox" v-for="watch in theWatches.OmegaWatches" :key="watch.id"
      @click="detailPage(watch.img,watch.brand,watch.model,watch.price,watch.modelNumber,watch.SKU,watch.imgGroup)">
        <img :src="watch.img"/>
        <div class="brand">
        <h3>{{ watch.brand }}</h3>
        <p>{{ watch.model }}</p>
        <span>{{ watch.price }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="selectOne == 'Oris'" class="products">
      <div class="watchBox" v-for="watch in theWatches.OrisWatches" :key="watch.id"
      @click="detailPage(watch.img,watch.brand,watch.model,watch.price,watch.modelNumber,watch.SKU,watch.imgGroup)">
        <img :src="watch.img"/>
        <div class="brand">
        <h3>{{ watch.brand }}</h3>
        <p>{{ watch.model }}</p>
        <span>{{ watch.price }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="selectOne == 'Timex'" class="products">
      <div class="watchBox" v-for="watch in theWatches.TimexWatches" :key="watch.id"
      @click="detailPage(watch.img,watch.brand,watch.model,watch.price,watch.modelNumber,watch.SKU,watch.imgGroup)">
        <img :src="watch.img"/>
        <div class="brand">
        <h3>{{ watch.brand }}</h3>
        <p>{{ watch.model }}</p>
        <span>{{ watch.price }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="selectOne == 'Swatch'" class="products">
      <div class="watchBox" v-for="watch in theWatches.SwatchWatches" :key="watch.id"
      @click="detailPage(watch.img,watch.brand,watch.model,watch.price,watch.modelNumber,watch.SKU,watch.imgGroup)">
        <img :src="watch.img"/>
        <div class="brand">
        <h3>{{ watch.brand }}</h3>
        <p>{{ watch.model }}</p>
        <span>{{ watch.price }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="selectOne == 'Akrivia'" class="products">
      <div class="watchBox" v-for="watch in theWatches.AkriviaWatches" :key="watch.id"
      @click="detailPage(watch.img,watch.brand,watch.model,watch.price,watch.modelNumber,watch.SKU,watch.imgGroup)">
        <img :src="watch.img"/>
        <div class="brand">
        <h3>{{ watch.brand }}</h3>
        <p>{{ watch.model }}</p>
        <span>{{ watch.price }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="selectOne == 'Cartier'" class="products">
      <div class="watchBox" v-for="watch in theWatches.CartierWatches" :key="watch.id"
      @click="detailPage(watch.img,watch.brand,watch.model,watch.price,watch.modelNumber,watch.SKU,watch.imgGroup)">
        <img :src="watch.img"/>
        <div class="brand">
        <h3>{{ watch.brand }}</h3>
        <p>{{ watch.model }}</p>
        <span>{{ watch.price }}</span>
        </div>
      </div>
    </div>
    
  </div>
    
  </div>


</template>
<script>
import jsonData from "../../data/data.json"
export default {
  data() {
    return {
      theWatches : jsonData,
      selectOne:"",
      showWatch:true,
      brandNames:["show All","Rolex","Omega","Zenith","Bell&Ross","Oris","Timex","Swatch","Akrivia","Cartier"],
    }
  },
  props:{
    showSelect:{
      type: Boolean,
      default : true
    }
  },
 
  mounted() {
    this.selectOne = "show All"

  },
  methods: {
    detailPage(img,brand,model,price,modelNumber,SKU,imgGroup){
      const groupStr = JSON.stringify(imgGroup)
      this.$router.push({
        name: "Details",
        params: {
          img,brand,model,price,modelNumber,SKU,imgGroup:groupStr
        }
      })
    }
  },

}
</script>



<style lang="css">

</style>
    