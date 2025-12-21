class Sketch{
    constructor(){
        this.character='doraemon';
        this.color='blue';
        this.someFnc=function(){};
    }
    speak(){}
    walk(){}
}
//constructor ke andr jo jo bana rhe ho wo object ka khud ka hoga
//constructor ke bahar jo bhi hota hai wo shared hota hai /common hota hai sare objects ke liye
let sketch1=new Sketch();
console.log(sketch1);
//this ek special keyword hota hai
/*uski value uske chale pe decide hoti hai
global->window
function->window
es5 function inside obj->obj
es6 function inside function->window
es5 function inside es5 function->window
es6 function inside es5 function->object
*/
console.log(this);
function abcd(){
    console.log(this);
}
abcd();
let obj={
    fnc:function(){
        function defg(){
            console.log(this);
        }
        hijk=()=>{
            console.log(this);
        }
        defg();
        hijk();
        console.log(this);
    }
}
obj.fnc();

//inheritance
//agar koi class kisi class ki extention hai to ap us class ke saare features borrow kar sakte ho and nayi class me use krskte ho aur naye features bhi bana skte ho
class Animal{
    constructor(){
        this.hands=2;
        this.legs=2;
    }
    eat(){}
    breathe(){}
}
class Kekda extends Animal{
    constructor(){
        super();
        this.hands=0;
        this.legs=8;
    }
    susu(){}
}
let k1=new Kekda();
console.log(k1);
//getter setter
//_var:variable that can be treated as private
class Human{
    constructor(){
        this._age=18;
    }
    set age(val){
        if(val<0){
            console.log('not');
            return;
        }
        this._age=val;
    }
    get age(){
        return this._age;
    }
}
let h1=new Human();
console.log(h1.age);