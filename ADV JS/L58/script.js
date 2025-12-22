/*js->single threaded languauge
ek kaam ek baar me kar paegi
synchronous approach
asynchronous approach
*/
//callbck-function jo turant nahi chlega ye chalega jab apka koi kaam complete hoga
//callback-aesa function jo kisi function me pass krte ho

/*function abcd(fn) {
    console.log('fn1');
    fn(function (fn3) {
        console.log('fn3');
        fn3(function (fn5) {
            fn5();
        });
    });
}
abcd(function (fn2) {
    console.log('fn2');
    fn2(function (fn4) {
        console.log('fn4');
        fn4(function () {
            console.log('hey');
        });
    });
});
*/
/*
callbacks
situation-

function iceCreamLaao(address,fn){
    //logic
    fn("icecream");
}
iceCreamLaao("abcnkjdhs",function(ice){
    console.log('agyi ice cream');
})
*/
//promises,async await,setTimeout and setInterval
// promises->ek kaam jake karo
// pending State
// hojaega->resolved
// nahi hoga->rejected
const prm=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve();
        reject();
    },3000)
})
prm.then(function(){
    console.log("hehehhehehe");
})
.catch(function(){
    console.log("rejected");
})

/*fetch se kisi bhi url par ja skte h
fetch ka data readable nahi hota hai
use json banake readable krte hai
iske baad jo data hota hai wo readable hota h
*/
fetch("https://randomuser.me/api/")
.then(function(nonReadableData){
    return nonReadableData.json();
})
.then(function(asliData){
    console.log(asliData.results[0].name.first);  
})
.catch((err)=>{
    console.log(err);
});

function getNum(){
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10);
            if(num<5)resolve(true);
            else reject(false);
        },3000);
    });
}
async function abcd(){
    let v=await getNum();
    console.log(v);
    
}
abcd();