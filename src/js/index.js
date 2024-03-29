const mixin = {
    data() {
        return {
              bcColor:"white",
              color: false
        }
  },
  methods: {
        hideSelect(){
              this.color = !this.color
              this.bcColor = this.color ? "#808080" : "white"
        }
  },
}

export default mixin