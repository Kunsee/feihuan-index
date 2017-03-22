<template>
    <div id="footer">
        <div class="content">
            <span><img :src="logoUrl" alt=""></span>
            <span>
                <ul>
                    <li><i class="iconfont icon-gongsi"></i></li>
                    <li>{{cPlace1}}</li>
                    <li>{{cPlace2}}</li>
                    <li></li>                    
                    <li class="esmall">{{ePlace1}}</li>
                    <li class="esmall">{{ePlace2}}</li>
                </ul>
            </span>
            <span>
                 <ul>
                    <li><i class="iconfont icon-dianhua"></i></li>
                    <li>{{cServerPhone}}</li>
                    <li class="esmall">{{eServerPhone}}</li>
                    <li></li>                    
                    <li>{{cCompany}}</li>
                    <li class="esmall">{{eCompany}}</li>
                </ul>
            </span>
            <div style="text-align: center;color:#fff;">
                {{copy}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                logoUrl: require('../../static/img/logo.jpg'),
                cPlace1: '广东省广州市荔湾区',
                cPlace2: '信义路24号七喜创意园4栋341',
                ePlace1: 'Guangdong Province, Liwan District of ',
                ePlace2: 'Guangzhou City on the 24th Road, seven ',
                cServerPhone: '服务热线：020-86534847',
                eServerPhone: 'ServiceHotline:020-86534847',
                cCompany: '广州市飞幻网络科技有限公司',
                eCompany: 'Guangzhou Fantasy Network Technology Co., Ltd',
                copy: 'Copyright © 2016 FeiHuan. All Rights Reserved. 广州市飞幻网络科技有限公司版权所有 粤ICP备17012506号'
            }
        }
    }
</script>
<style lang="scss">
    @import '../assets/font/font_98plnyudjk29y66r/iconfont.css';
    @import '../assets/style/footer.scss';
</style>