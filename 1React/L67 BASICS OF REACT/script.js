// var h1=React.createElement('h1',{id:'hero'},'hello from prayagraj');
// var h2=React.createElement('h2',{id:'heroine'},'this is h2');
// var div=React.createElement('div',{id:'parent',class:'elem'},[h1,h2]);
// var root=ReactDOM.createRoot(document.querySelector("#container"));
// root.render(div);
// or
// function h1(){
//     return React.createElement('h1',null,'hello from h1');
// }
// var root=ReactDOM.createRoot(document.querySelector('#container'));
// root.render(h1());
// or 
// const h1=()=>React.createElement('h1',null,'hello from h1');
// const root=ReactDOM.createRoot(document.querySelector("#container"));
// or
import box from './app.js';
import circle from './test.js';
const root=ReactDOM.createRoot(document.querySelector('#container'));
const parent=()=>React.createElement('div',null,[box(),circle()]);
root.render(parent());