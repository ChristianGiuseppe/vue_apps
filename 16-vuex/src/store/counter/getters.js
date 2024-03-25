export default {
    //posso accedervi soltanto dal rootState e rootGetters allo stato di auth
    finalCounter(state) {
        return state.counter * 2;
    },
    normalizedCounter(_, getters) {
        const finalCounter = getters.finalCounter;
        if (finalCounter < 0) {
            return 0;
        } else if (finalCounter > 100) {
            return 100;
        }
        return finalCounter;
    },
};