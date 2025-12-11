var btn=document.querySelector('button');
var main=document.querySelector('main');
var arr=['hey i am ananya','sheryians is best','anubhav is handsome','harsh bhaiya ki jai ho','js is love','practice karna na bhule'];
btn.addEventListener('click',function(){
    var h1=document.createElement('h1');
    var a=Math.floor(Math.random()*arr.length);
    var x=Math.random()*80;
    var y=Math.random()*80;
    var rot=Math.random()*360;
    var scl=Math.random()*3;
    h1.innerHTML=arr[a];
    h1.style.color='white';
    h1.style.position='absolute';
    h1.style.left=x+'%';
    h1.style.top=y+'%';
    h1.style.rotate=rot+'deg';
    h1.style.scale=scl;
    main.appendChild(h1);
})
/*TOPICS
create element is used to create new element
appenChild is used to append it in any parent
What you have to do:
make main div in html,give ht and wdt 100%make a btn and center it give it position relative and z index
in js select button and main div add a eventlistener on button
inside a function create new element with the help of creatEelement method
if you have sucessfully created an element print on console to check it
write innerHTML if you want 
use parent.appendChild method to add this new in main div
*/