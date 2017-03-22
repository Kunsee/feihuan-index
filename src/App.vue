<template>
  <div id="app">
    <header1></header1>
    <router-view></router-view>
    <footer1></footer1>
  </div>
</template>
<script>
    import header1 from '../src/components/header.vue';
    import footer1 from '../src/components/footer.vue';
    export default {
        name: 'app',
        components: {
            header1,
            footer1
        },
        created: function() {
            this.changeTitle();
        },
        methods: {
            changeTitle: function() {
                document.title = '广州市飞幻网络科技有限公司'
            }
        }
    }
</script>

<style lang="scss">
    @import '../src/assets/style/common.scss';
</style>