import {debounce} from "./untils";

export const itemListenerMixin={
    data(){
        return {
            itemListener:null,
            refresh:null
        }
    },
    mounted(){
         this.refresh=debounce( this.$refs.scroll.refresh,30)
        this.itemImageListener=()=>{
            this.refresh()

        }
        this.$bus.$on("imageLoad",this.itemImageListener)
        //console.log("我是混入的内力")
    },
    methods:{
        back(){
            this.$refs.scroll.scrollTop(0,0,300)
        },
    }
}
export const backTopMixins={
    data(){
        return {
            positionY:false,
        }
    },
    methods:{
        back(){
            this.$refs.scroll.scrollTop(0,0,300)
        },
    }
}