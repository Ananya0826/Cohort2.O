var istatus=document.querySelector("h5");
var add=document.querySelector("#add");
let check=0;
add.addEventListener("click",function () {
    if(check===0){
        istatus.innerHTML="Friends";
        istatus.style.color="green";
        add.innerHTML="Remove Friend";
        add.style.backgroundColor="#dadada";
        add.style.color="#111";
        check=1;
    }
    else{
        istatus.innerHTML="Stranger";
        istatus.style.color="red";
        add.innerHTML="Add Friend";
        add.style.backgroundColor="cadetblue";
        add.style.color="#fff";
        check=0;
    }
})
