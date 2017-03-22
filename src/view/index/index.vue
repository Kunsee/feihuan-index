<template>      
    <div id="index">
        <swiper></swiper>
        <div class="content">
            <div id="Marketing" class="marketing">
                <h2><span>{{marketingStr}}</span></h2>
                <p>{{marketingPro}}</p>
                <div class="part">
                    <div v-for="(item,$index) in marketingList">
                    <div class="info"> 
                        <h3>{{item.cName}}</h3>
                        <p>{{item.content}}</p>
                    </div>
                    <dl>
                        <dt><i :class="item.sign"></i></dt>
                        <dd>
                            <p>{{item.cName}}</p>
                            <p>{{item.eName}}</p>
                        </dd>
                    </dl>
                    </div>
                </div>
            </div>
             <div class="team">
                <div class="content">
                    <h2><span>{{marketingOl}}</span></h2>
                    <p>{{marketingPro1}}</p>
                    <div class="part">
                        <dl v-for="(item,$index) in marketingTeamList">
                            <dt><img :src="item.imgUrl" alt=""></dt>
                            <dd>
                                <h3>{{item.cTeam}}</h3>
                                <p>{{item.eTeam}}</p>
                                <p>{{item.pro}}</p>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div id="case" class="case">
                 <div class="content">
                    <h2><span>{{caseStr}}</span></h2>
                    <p>{{casePro}}</p>
                    <div class="part">
                        <img :src="caseImg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import swiper from '../../components/swiper.vue';
    export default {
        data() {
            return {
                marketingStr: '产品网络营销',
                marketingPro: '多维度精准投放 定制投放设计',
                marketingList: [{
                    sign: 'iconfont icon-artboardcopy2',
                    cName: '策略指导',
                    eName: 'POLICY GUIDANCE',
                    content: '行业情况分析、竞争对手分析、目标受众分析、媒体投放策略、营销&活动策略、执行&优化策略'
                }, {
                    sign: 'iconfont icon-qianqigoutong',
                    cName: '媒体沟通',
                    eName: 'MEDIA COMMUNICATION',
                    content: '媒体价格谈判、资源位置匹配、覆盖度额次设定、媒体定向策略、媒体评估调整、媒体投放优化'
                }, {
                    sign: 'iconfont icon-guanggaotoufangpingtai',
                    cName: '精准投放',
                    eName: 'ACCURATE DELIVERY',
                    content: '投放数据实时监控、投放效果优化调整、多唯独优化包括媒体&位置&创意&受众&时间频次等'
                }, {
                    sign: 'iconfont icon-baogaotubiao',
                    cName: '数据反馈',
                    eName: 'DATA FEEDBACK',
                    content: '对媒体及用户多维度监测、为客户和媒体提供真实详尽的报表：曝光、点击、下载、注册、活跃度等'
                }, {
                    sign: 'iconfont icon-yingxiao',
                    cName: '营销报告',
                    eName: 'MARKETING REPORT',
                    content: '全天候监测/收集营销推广数据、对品牌/产品的营销推广投放进行整体总结和分析；营销效果，了然于胸'
                }, {
                    sign: 'iconfont icon-keyuangenjin',
                    cName: '后续服务',
                    eName: 'FOLLOW-UP SERVER',
                    content: '根据投放效果的经验对后续营销给出客户专业化、针对性、指导性的有效建议，作出合理的客户投放帮助'
                }],
                marketingOl: '互联网营销推广',
                marketingPro1: '海量高端移动互联网 助力全面广告效果',
                marketingTeamList: [{
                    imgUrl: require('../../../static/img/team1.png'),
                    cTeam: '项目策划团队',
                    eTeam: 'PROJECT PLANNING',
                    pro: '市场营销策略分析，媒介传播计划媒介排气，创意内容'
                }, {
                    imgUrl: require('../../../static/img/team2.png'),
                    cTeam: '运营优化团队',
                    eTeam: 'PROJECT PLANNING',
                    pro: '市场投放优化，有效调价，推广素材，随时响应'
                }, {
                    imgUrl: require('../../../static/img/team3.png'),
                    cTeam: '数据分析团队',
                    eTeam: 'PROJECT PLANNING',
                    pro: '实时监控后台运转，数据化分析，报表式反馈'
                }],
                caseStr: '成功案例',
                casePro: '移动互联网营销专家',
                caseImg: require('../../../static/img/case.jpg')
            }
        },
        components: {
            swiper
        }
    }
</script>
<style lang="scss">
    @import '../../assets/font/font_98plnyudjk29y66r/iconfont.css';
    @import '../../assets/style/index.scss';
</style>