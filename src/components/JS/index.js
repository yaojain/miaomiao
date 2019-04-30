import Vue from 'vue'
import MessageBox from '@/components/JS/MessageBox'

export var messageBox = (function () {
    var defaults = {   //默认值
        title: '',
        content: '',
        cancel: '',
        ok: '',
        handleCancel: null,
        handleOk: null
    };
    var MyComponents = Vue.extend(MessageBox);
    return function (opts) {
        for (const attr in opts) {
            defaults[attr] = opts[attr];
        }
        var vm = new MyComponents({
            el: document.createElement('div'),
            data: {
                title: defaults.title,
                content: defaults.content,
                cancel: defaults.cancel,
                ok: defaults.ok
            },
            methods: {
                handleCancel() {    //绑定this  考虑为通信使用  直接调用defaults.handleCancel()也可走子类操作
                    defaults.handleCancel && defaults.handleCancel.bind(this).call()
                    document.body.removeChild(vm.$el);
                },
                handleOk() {
                    defaults.handleOk && defaults.handleOk.apply(this);
                    document.body.removeChild(vm.$el);
                }
            }
        })
        document.body.appendChild(vm.$el);
    };
})()