function openFeatures(){
var allElems=document.querySelectorAll('.elem')
var FullElemPage=document.querySelectorAll(".fullElem")
var FullElemPageBackBtn=document.querySelectorAll(".fullElem .back")
allElems.forEach(function(elem){
    elem.addEventListener('click',function(){
        FullElemPage[elem.id].style.display='block';
    }
    )
})
FullElemPageBackBtn.forEach(function(back){
    back.addEventListener('click',function(){
        FullElemPage[back.id].style.display='none';
        
    })
})
}
// openFeatures()
let form=document.querySelector('.addTask form');
let taskInput=document.querySelector('.addTask form input');
let taskDetailsInput=document.querySelector('.addTask form textarea');
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(taskInput.value, taskDetailsInput.value);
    
})