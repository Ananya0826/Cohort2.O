var body=document.body;
var aud1=new Audio('./24.mp3')
var aud2=new Audio('./29.mp3')
var aud3=new Audio('./36.mp3')
var aud4=new Audio('./41.mp3')
var aud5=new Audio('./48.mp3')
var aud6=new Audio('./53.mp3')
var aud7=new Audio('./60.mp3')
body.addEventListener('keydown',function(e){
    if(e.code=='KeyA'){
        console.log("A");
        aud1.play();
    }
    if(e.code=='KeyB'){
        console.log("B");
        aud2.play();
    }
    if(e.code=='KeyC'){
        console.log("C");
        aud3.play();
    }
    if(e.code=='KeyD'){
        console.log("D");
        aud4.play();
    }
    if(e.code=='KeyE'){
        console.log("E");
        aud5.play();
    }
    if(e.code=='KeyF'){
        console.log("F");
        aud6.play();
    }
    if(e.code=='KeyG'){
        console.log("G");
        aud7.play();
    }
})