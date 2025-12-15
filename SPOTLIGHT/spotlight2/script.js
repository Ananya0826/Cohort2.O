const para=document.querySelector('p');
console.log(para);
const character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const text=para.innerText;
para.addEventListener('mouseenter',()=>{
    setInterval(()=>{
        const str=text.split('').map((char,index)=>{
            return character.split('')[Math.floor(Math.random()*53)]}).join('')
        para.innerText=str;
    },100)
})