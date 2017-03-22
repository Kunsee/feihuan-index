<template>
    <div id="swiper" @mouseover="endSwiper(timer)" @mouseout="startSwiper()">
        <ul>
            <li v-for="(item,$index) in imgUrl" class="list" :class="{showSwiper:$index == swiperNow,hideSwiper:$index!=swiperNow}" :style="{backgroundImage:'url('+ item +')'}"></li>
        </ul>
         <ul class="cir-index">
            <li v-for="(item,$index) in imgIndex" :class="{circleNow:$index == swiperNow,circle: $index !=swiperNow}" @click="changeIndex($index)">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                imgUrl: [require('../../static/img/swiper1.jpg'), require('../../static/img/swiper2.jpg'), require('../../static/img/swiper3.jpg')],
                imgIndex: ['', '', ''],
                timer: '',
                swiperNow: 0,
                imgHeight: ''
            }
        },
        created: function() {
            this.startSwiper();
        },
        methods: {
            startSwiper: function() { //开始轮播
                let _this = this;
                this.timer = setInterval(() => {
                    _this.swiperNow += 1;
                    if (_this.swiperNow == _this.imgUrl.length) {
                        _this.swiperNow = 0;
                    }
                }, 5000)
                return this.timer

            },
            endSwiper: function(timer) { //结束轮播
                clearInterval(timer);
            },
            changeIndex: function(num) { //改变轮播
                this.swiperNow = num;
            }
        }

    }
</script>
<style lang="scss">
    #swiper {
        position: relative;
        /*height: 700px;*/
        width: 100%;
        ul:nth-child(1) {
            display: block;
            li {
                position: absolute;
                top: 0;
                width: 100%;
                height: 700px;
                /*background-attachment: fixed;*/
                background-position: center;
                background-repeat: no-repeat;
                img {
                    display: block;
                    width: 100%;
                    max-width: 1920px;
                }
            }
        }
        .cir-index {
            transform: translate(0%, 550px);
            width: 150px;
            margin: 0 auto;
            height: 700px;
            li {
                margin: 0 16px;
                width: 16px;
                height: 16px;
                display: inline-block;
                border-radius: 50%;
                cursor: pointer;
            }
            .circle {
                background: #d1d1d1;
            }
            .circleNow {
                background: #ff5c02;
            }
        }
        .showSwiper {
            opacity: 1;
            transition: all 1s ease;
        }
        .hideSwiper {
            opacity: 0;
            transition: all 1s ease;
        }
    }
</style>