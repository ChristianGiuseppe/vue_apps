export default {
    increment(context) {
        //esegure codice asincrono
        setTimeout(() => {
            context.commit('increment');
        }, 2000);
        
    },
    increase(context, payload) {
        context.commit('increase', payload);
    },
};