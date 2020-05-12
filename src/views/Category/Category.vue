<template>
    <div id="category">
        <nav-bar class="nav-bar"><div slot="center">分类</div></nav-bar>
        <div class="content">
            <tab-menu :title="menuTitle" active='red' @li-click="liClick" ></tab-menu>
            <scroll class="content2" ref="scroll">
                <tab-content :data="categoryData"></tab-content>
            </scroll>

        </div>

    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import TabMenu from "./childComps/TabMenu";
    import TabContent from "./childComps/TabContent";
    import {Category,getSubCategory} from "network/category";
    import Scroll from "components/common/bscroll/Scroll";
    export default {
        name: "Category",
        components:{
            NavBar,
            TabMenu,
            TabContent,
            Scroll
        },
        data(){
            return{
                menuTitle:[],
                currentIndex:0,
                categoryData:[],
            }
        },
        created() {
            Category().then(res=>{
                this.menuTitle=res.data.data.category.list
                //console.log( this.menuTitle[0].maitKey)
                this.liClick(this.currentIndex)
            })

        },
        mounted() {
            const refresh=this.debounce( this.$refs.scroll.refresh,30)
            this.$bus.$on('loadImage',()=>{
                refresh()
            })

        },

        methods:{
            debounce(func,delay){
                let timer=null;

                return function(...args){
                    if(timer) clearTimeout(timer)
                    timer=setTimeout(()=>{
                         func.apply(this,args)
                    },delay)
                }

            },
            liClick(index){
              //console.log(maitkey)
                this.currentIndex=index
                const maitkey= this.menuTitle[ this.currentIndex].maitKey
                console.log( maitkey)
                getSubCategory(maitkey).then(res=>{
                    //console.log(res.data.data.list)
                    this.categoryData=res.data.data.list
                    console.log( this.categoryData)
                })

            },
        }
    }
</script>

<style scoped>
    .nav-bar{
        background-color: #ff5777;
        color: white;
    }
    .content{
        display: flex;
        height: 100vh;
        overflow: hidden;
    }
    .content2{
        height: calc(100% - 44px - 49px);
    }
</style>