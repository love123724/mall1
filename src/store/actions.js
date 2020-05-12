export default {
    addCart(context, payload) {
        return  new Promise((resolve,reject)=>{
            const  oldProduct=context.state.cartList.find(item=>{
                return item.iid===payload.iid
            })
            if(oldProduct){
                context.commit("addCounter",oldProduct)
                resolve("商品数量+1")
            }else{
                context.commit("addToCar",payload)
                resolve("添加商品成功")
            }
        })

    },
    user(context){
        context.commit('user')
    }
}