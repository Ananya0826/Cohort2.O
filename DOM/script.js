// DOM:Document object Model
// frontend ki js
// dom 4 pillars:
// selection of an Element
// changing html
// changing css
// event listeners
// let x=document.querySelector('h1');
// console.log(x); 
// x.innerHTML='I am ye wo';
// x.addEventListener('click',function(){
//     x.innerHTML="lets goooo!!!!";
//     x.style.color='red';
//     h1.style.backgroundColor="royal blue";
// });
// let y=Math.random()*100;
// console.log(y);
// let z=Math.floor(y);
// console.log(z);
var btn=document.querySelector('button');
var box=document.querySelector('#box');
btn.addEventListener('click',function(){
    var c1=Math.floor(Math.random()*256);
    var c2=Math.floor(Math.random()*256);
    var c3=Math.floor(Math.random()*256);
    console.log(c1,c2,c3);
    box.style.backgroundColor=`rgb(${c1},${c2},${c3})`
})