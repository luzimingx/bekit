import Vue from 'vue';
// 引入工具包
import * as common from '../../dist/index.js';
window.common = common;
console.log(common);
const { Factory, Time, Ua, Url, Dom } = common.helper;
// 应用插件
Vue.use(common.plugin.vueNotice);
// 引入业务样式 这些是需要在项目中手写的
import './example.less';

new Vue({
    el: '#app',
    data: {
        name: 'bekit'
    },
    created: function() {
        window.x = this;
        this.$nextTick(this.test);
        this.ls();
        // this.notice();
    },
    methods: {
        test: function() {

        },
        ls: function() {
            window.ls = new common.helper.Ls();
        },
        notice: function() {
            var _this = this;
            this.$confirm('some message', 'title', {
                confirmButtonText: '好的'
            }).then(function(data) {
                _this.$toast({
                    message: data.value,
                    type: 'success'
                });
            }).catch(function() {
                _this.$toast({
                    message: 'cancel',
                    type: 'warning',
                });
            });
        }
    }
});