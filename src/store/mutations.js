import cookie from "../network/cookie";
export default {
  addCounter(state, oldProduct) {
    oldProduct.count += 1
  },
  addToCar(state, payload) {
    payload.check = true;
    payload.count = 1;
    state.cartList.push(payload);
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
    //console.log(state)
   // console.log(state.userInfo)
  },
  user(state) {
    state.userInfo.name = cookie.getCookie('phone') || '';
    state.userInfo.token = cookie.getCookie('token') || '';
    console.log(state.userInfo)
  }
}

