export default {
    // increment(state) {
    //     state.counter = state.counter + 1;
    // },
    // increase(state, payload) { //possimao anche passare dei parametri 
    //     state.counter = state.counter + payload.value;
    // },
    setAuth(state, payload) {
        state.isLoggedIn = payload.isAuth;
    },
};