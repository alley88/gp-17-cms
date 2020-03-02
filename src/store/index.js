import Vue from "vue";
import Vuex from "vuex";
import Cookies from "js-cookie"
Vue.use(Vuex);


const store = new Vuex.Store({
    state:{
        authToken: Cookies.get("token") || ""
    },
    mutations:{
        handleAuthToken(state,data){
            state.authToken  = data;
            Cookies.set("token",data)
        }
    },
    actions:{}
})


export default store