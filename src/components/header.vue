<template>
    <div id="header">
        <div class="content">
            <h1 :style="{backgroundImage:'url('+ logo +')'}">飞幻网络</h1>
            <ul class="nav">
                <li  v-for="(item,$index) in nav">
                <router-link :to="item.navlink" :class="navlist">
                    {{item.navName}}
                </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                logo: require('../../static/img/logo.jpg'),
                nav: [{
                    navName: '首页',
                    navlink: '/Index'
                }, {
                    navName: '营销体系',
                    navlink: '/Index#Marketing'
                }, {
                    navName: '经典案件',
                    navlink: '/Index#case'
                }, {
                    navName: '公司介绍',
                    navlink: '/Introduction'
                }, {
                    navName: '加入我们',
                    navlink: '/Join'
                }, {
                    navName: '联系我们',
                    navlink: '/Connect'
                }],
                navlist: 'nav-list'
            }
        },
        methods: {

        }
    }
</script>
<style lang="scss">
    @import '../assets/style/header.scss'
</style>