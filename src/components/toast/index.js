import Toast from './Toast';
const obj = {};

obj.install = function(Vue){
    // 创建组件构造器
    const ToastConstructor = Vue.extend(Toast);
    // new组件对象
    const toast = new ToastConstructor();
    // 将组件对象挂载到document中
    toast.$mount(document.createElement('div'));
    // 将组件添加到body中
    document.body.appendChild(toast.$el);
    // 将组件对象添加到vue原型中
    Vue.prototype.$toast = toast;
}

export default obj;