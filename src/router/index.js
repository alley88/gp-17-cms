import Vue from "vue";
import VueRouter from "vue-router";
import shopManage from "./shopManage"
import userManage from "./userManage"
import login from "./login"
import home from "./home"
import store from "@store";
Vue.use(VueRouter)
const config = [
    {
        path: "",
        component: _ => import("@pages/layout"),
        name: "layout",
        children: [
            home,
            shopManage,
            userManage,
        ]
    },
    login

]


const router = new VueRouter({
    mode: "hash",
    routes: config
})


router.beforeEach((to, from, next) => {
    if (to.meta.authRequired) {
        next();
    } else {
        if (store.state.authToken) {
            next();
        } else {
            next("/login");
        }
    }
})


export default router;