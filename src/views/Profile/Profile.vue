<template>
    <div class="profile">
       <nav-bar class="nav-bar">
           <div slot="center">个人中心</div>
       </nav-bar>
        <login/>
        <user-info/>
        <tools-list/>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Login from "views/Profile/childComps/Login";
    import UserInfo from "./childComps/UserInfo";
    import ToolsList from "./childComps/ToolsList";
    export default {
        name: "Profile",
        components:{
            NavBar,
            Login,
            UserInfo,
            ToolsList
        },
        created() {
            console.log(this.$store.cartList)
        }
    }
</script>

<style scoped>
.nav-bar{
    background-color: #ff5777;
    color: white;
}
</style>