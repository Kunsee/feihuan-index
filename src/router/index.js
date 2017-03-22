import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Index from '../view/index/index.vue'
import Introduction from '../view/introduction/Introduction.vue'
import Join from '../view/join/join.vue'
import Connent from '../view/Connect/connect.vue'

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Index',
            component: Index,
        }, {
            path: '/Index',
            name: 'Index',
            component: Index
        }, {
            path: '/Introduction',
            name: 'Introduction',
            component: Introduction
        },
        {
            path: '/Join',
            name: 'Join',
            component: Join
        },
        {
            path: '/Connect',
            name: 'Connect',
            component: Connent
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            var dom = document.querySelector(to.hash);
            var userAgent = navigator.userAgent; //取得浏览器的userAgent
            if (userAgent.indexOf("Firefox") > -1) {
                document.documentElement.scrollTop = dom.offsetTop;
            } else {
                document.body.scrollTop = dom.offsetTop;

            }
        }
    }
})