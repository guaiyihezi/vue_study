import Vue from 'vue';
// function create(component, props) {
//   // render函数将组件配置对象转化成虚拟dom
//   const vm = new Vue({render: h => h(component, {props})}).$mount();
//   document.body.appendChild(vm.$el);
//   const comp = vm.$children[0];
//   comp.remove = () => {
//     document.body.removeChild(vm.$el);
//     vm.$destroy();
//   };
//   return comp;
// }

export default create;

function createRe(component, props) {
  const vm = new Vue({render: h => h(component, {props})}).$mount();
  document.body.appendChild(vm.$el);
  const comp = vm.$children[0];
  comp.remove = () => {
    vm.$destroy();
  };
  return comp;
}
