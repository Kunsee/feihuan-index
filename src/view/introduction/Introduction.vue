<template>
    <div id="Introduction">
        <div class="IntroImg">
            <img :src="IntroUrl" alt="" class="imgPro">
            <div class="comContent">
                <div class="part1">
                <h2>{{cTitle}}</h2>
                <p class="titleStyle">{{eTitle}}</p>
                <P>{{cStr}}</P>
                <P class="esmall">{{eStr}}</P>
                <ul>
                    <li v-for="(item,$index) in slist">
                        <h3>{{item.sTitle}}</h3>
                        <span>{{item.sCPro}}</span>
                        <p class="esmall">{{item.sEPro}}</p>
                    </li>
                </ul>
                </div>
                <div class="part2">
                    <h2>{{cWorkPlace}}</h2>
                    <p class="titleStyle">{{eWorkPlace}}</p>
                    <ul>
                        <li v-for="(item,$index) in workImgList"><img :src="item" alt=""></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                IntroUrl: require('../../../static/img/comPro.jpg'),
                cTitle: '公司介绍',
                eTitle: 'COMPANY PROFILE',
                cStr: ' 广州市飞幻网络科技有限公司，是一家新兴创业公司，立志做领先的移动互联网运营服务公司，创业团队均为80后,既拥有近十年的移动互联网从业经验,又有年轻人的激情和活力。公司业务方向清晰,下设增值事业部，联盟广告事业部。',
                eStr: "Guangzhou Fantasy Network Technology Co., Ltd. is an emerging entrepreneurial company, determined to be the leading mobile internet operation service company, the startup teams are all generation after 80s, they have nearly 10 years working experience in mobile internet industry, also they are young with passion and vitality. The company is with clear business direction, constituted by Value-added Business Division and Union Advertising Division.",
                slist: [{
                    sTitle: '公司现状和发展趋势',
                    sCPro: '公司成立初期,正在积极招兵买马,业务增长势头良好,.储备稳固,又积极进取,期望未来3年有质的飞跃。',
                    sEPro: 'Current Performance and Development Trend At its initial period, the company is actively recruiting and expending its teams. With good momentum of business growth, stable reserves and proactive spirit, the company expects qualitative leaps within the next 3 years.'
                }, {
                    sTitle: '主要产品和服务',
                    sCPro: '以为手机游戏提供智能计费模块,提供手机应用软件推广渠道的上下游整合。APP推广服务，为城市智慧生活提供整合工具。现诚邀有志小伙伴加入我们团队，一起创建乐趣未来！',
                    sEPro: 'Main Products and Services 1. Provide intelligent billing module for mobile games. 2. Provide up & down stream intergration for promotion channels of mobile Apps. 3. Provide promotion service for Apps, offering intergration tools for urban intelligent life.'
                }],
                cWorkPlace: '工作环境',
                eWorkPlace: 'WORKING ENVIRONMENT',
                workImgList: [require('../../../static/img/comImg1.jpg'), require('../../../static/img/comImg2.jpg'), require('../../../static/img/comImg3.jpg'), require('../../../static/img/comImg4.jpg')]
            }
        }
    }
</script>
<style lang='scss'>
    @import '../../assets/style/introduction.scss';
</style>