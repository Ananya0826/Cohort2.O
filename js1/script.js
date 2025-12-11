let obj={
    name:"harsh",
    fnc:function(){
        console.log(this);
    },
    fnc2:()=>{
        console.log(this);
        
    }
}
function abcd(){
    console.log(this);
}
obj.fnc();
obj.fnc2();
abcd();