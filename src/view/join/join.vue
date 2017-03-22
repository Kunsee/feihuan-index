<template>
    <div id="Join">
        <div class="content">
            <h2>精英联盟</h2>
            <p class="nStyle">RECRUITMENT ELITE</p>
            <p>就差你了</p>
            <ul class="jobNav">
                <li v-for="item in jobList"><a :href="item.url" >{{item.name}}</a></li>
                 <p>{{jobPro}}</p>
            </ul>
            <div class="det">
                <div v-for="item in jobCList" class="list">
                    <div :class="item.bgcolor1">
                        <h3 :id="item.url">{{item.name}}</h3>
                        <p>{{item.duty}}</p>
                        <ul>
                            <li v-for="clist in item.dutyList">{{clist}}</li>
                        </ul>
                    </div>
                    <div :class="item.bgcolor2">
                        <p>{{item.require}}</p>
                        <ul>
                            <li v-for="reList in item.requireList">{{reList}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                jobList: [{
                    name: '会计',
                    url: '#Accounting'
                }, {
                    name: '商务专员',
                    url: '#Commisioner'
                }, {
                    name: 'HTML5开发',
                    url: '#Html5'
                }, {
                    name: 'UI视觉设计',
                    url: '#Ui'
                }, {
                    name: '电商客服',
                    url: '#Customer'
                }],
                jobPro: '如您有意向加入飞幻团队，欢迎发送岗位名称+个人简历到邮箱：feihuan_hr@163.com',
                jobCList: [{
                    name: '会计',
                    url: 'Accounting',
                    duty: '岗位职责',
                    dutyList: ['1. 负责全盘账务处理：包括编制及审核日常单据、发票、会计凭证，每月按时出具相关财务报表；应收账款和应付账款控制和规划，对接税务、工商等部门，完成企业各项税务申报；', '2.负责制定并完成公司的财务会计制度、规定和办法；', '3.完成领导交代的其他公司事务性工作。'],
                    require: '岗位要求',
                    requireList: ['1. 财务、会计相关专业，大专及以上学历，持会计从业资格证者优先；', '2.具2年以上财务工作经历，有互联网公司工作经验者优先；', '3.具有全面的财务专业知识、熟悉各项税务制度和要求，财务知识扎实，能够独立处理企业全套账务，准确编制会计报表，具备基本的财务分析和管理能力；', '4.工作认真严谨，能独立思考，抗压性强，有优秀的职业道德。'],
                    bgcolor1: 'bg1',
                    bgcolor2: 'bg2'
                }, {
                    name: '商务专员',
                    url: 'Commisioner',
                    duty: '岗位职责',
                    dutyList: ['1.按照培训内容进行安卓、IOS应用推广工作，积极开拓渠道并达成合作；', '2.协助应用商店，维护推广渠道，跟进渠道量级提升推广品质；', '3.对推广数据进行整理评估，分析数据，制定产品优化推广方案。'],
                    require: '岗位要求',
                    requireList: ['1.对移动互联网领域有一定的认识和见解，熟悉安卓、ios用户应用使用习惯；', '2．熟悉网络推广，拥有相关渠道推广资源者优先；', '3.有相关市场推广工作经验者优先；', '4.具备良好沟通能力，有较强谈判能力；', '5.对数据分析较为敏感，学习能力强，执行力强并有较强抗压能力。'],
                    bgcolor1: 'bg2',
                    bgcolor2: 'bg1'
                }, {
                    name: 'HTML5开发',
                    url: 'Html5',
                    duty: '岗位职责',
                    dutyList: ['1.熟练掌握HTML5技术，能熟练制作HTML5链接界面；', '2.负责电商网站数据后台的开发与维护；', '3.负责分析和解决前端遇到的各种技术、性能、跨终端兼容问题。'],
                    require: '岗位要求',
                    requireList: ['1.计算机相关专业，大专及以上学历，1年及以上H5前端开发经验；', '2.对用户体验交互设计有深刻见解；', '3.有电商网站相关项目经验者优先；', '4.具备抗压能力、较强的自学能力及独立思考能力，有良好的团队合作精神。'],
                    bgcolor1: 'bg1',
                    bgcolor2: 'bg2'
                }, {
                    name: 'UI视觉设计',
                    url: 'Ui',
                    duty: '岗位职责',
                    dutyList: ['1.负责设计手机H5宣传页面；', '2.负责项目活动页面和推广素材等相关设计；；', '3.负责提升用户的视觉体验和交互体验。'],
                    require: '岗位要求',
                    requireList: ['1.大专及以上学历，设计或艺术类相关专业；', '2.熟练使用Photoshop、Illustrator等相关设计软件；', '3.有手机客户端产品界面设计经验者优先； ', '4.具有良好沟通表达能力，优秀的视觉设计感觉，丰富的创意头脑；', '5.随简历附上个人设计作品更佳。'],
                    bgcolor1: 'bg2',
                    bgcolor2: 'bg1'
                }, {
                    name: '电商客服',
                    url: 'Customer',
                    duty: '岗位职责',
                    dutyList: ['1.处理商城日常事务，包括网络留言回复、订单管理、到货跟踪、评价管理、售后服务等工作；', '2.负责对客户传递的意见进行记录、分类并整理；', '3.负责客户的维护以及回访跟踪，保证客户满意度，提升公司形象。'],
                    require: '岗位要求',
                    requireList: ['1.对互联网行业有浓厚兴趣，热爱客服工作，服务意识强；', '2.有电商客服工作经验者优先；', '3.具有极佳亲和力及耐心，掌握良好沟通技巧及语言表达能力；', '4.计算机操作熟练，office办公软件熟练，打字基础熟练，有一定的网络知识基础。'],
                    bgcolor1: 'bg1',
                    bgcolor2: 'bg2'
                }]
            }
        }
    }
</script>
<style lang="scss">
    @import '../../assets/style/join.scss'
</style>