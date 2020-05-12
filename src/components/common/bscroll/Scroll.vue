<template>
    <div class="wraper" ref="content">
        <div class="content" >
           <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Bscroll",
        data() {
            return {
                scroll: null
            }
        },
        props: {
            pullUpLoad: {
                type: Boolean,
                default: false
            },
            probeType: {
                type: Number,
                default: 0
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.content, {
                click: true,
                pullUpLoad: this.pullUpLoad,
                probeType: this.probeType
            })
            this.scroll.on("pullingUp", () => {
                this.$emit("pull")

            })
            this.scroll.on('scroll', (position) => {
                //console.log(position)
                this.$emit("scroll2", position)
            })

        },
        methods: {
            scrollTop(x, y, delay) {
               this.scroll && this.scroll.scrollTo(x, y, delay)
            },
            refresh() {
                console.log('---')
                this.scroll &&  this.scroll.refresh()
            }
        }
    }
</script>

<style scoped>

</style>