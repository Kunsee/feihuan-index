<template>
    <div id="connect">
        <div class="content">
            <h2>{{callMe}}</h2>
            <p>{{eCallMe}}</p>
            <div class="part">
                <ul>
                    <li><span>{{wayList.place}}</span><span>{{wayList.placeStr}}</span></li>
                    <li><span>{{wayList.phone}}</span><span>{{wayList.phoneStr}}</span></li>
                    <li><span>{{wayList.email}}</span><span>{{wayList.emailStr}}</span></li>
                </ul>
                <BMap></BMap>
                <!--<div id="r-result"></div>-->
            </div>
        </div>
    </div>    
</template>
<script>
    import baiduMap from '../../assets/js/map.js';
    import BMap from '../../components/BMapComponent.vue'
    export default {
        data() {
            return {
                callMe: '联系我们',
                eCallMe: 'CONTACTUS',
                wayList: {
                    place: '地址:',
                    placeStr: '广州荔湾区信义路24号七喜创意园4栋341',
                    phone: '电话:',
                    phoneStr: '020-86534847',
                    email: '邮箱:',
                    emailStr: 'feihuan_hr@163.com'
                }
            }
        },
        components: {
            BMap
        }
    }
</script>
<style lang="scss">
    @import '../../assets/style/connect.scss'
</style>