function openFeatures() {
    var allElems = document.querySelectorAll('.elem')
    var FullElemPage = document.querySelectorAll(".fullElem")
    var FullElemPageBackBtn = document.querySelectorAll(".fullElem .back")
    allElems.forEach(function (elem) {
        elem.addEventListener('click', function () {
            FullElemPage[elem.id].style.display = 'block';
        }
        )
    })
    FullElemPageBackBtn.forEach(function (back) {
        back.addEventListener('click', function () {
            FullElemPage[back.id].style.display = 'none';

        })
    })
}
// openFeatures()
function todoList() {
    var currentTask = [];
    if (localStorage.getItem('currentTask')) {
        console.log('task list id full');
        currentTask = JSON.parse(localStorage.getItem('currentTask'))
    }
    else {
        console.log('task list id empty');
    }
    function renderTask() {
        
        var allTask = document.querySelector('.allTask');
        var sum = '';
        currentTask.forEach(function (elem, idx) {
            console.log(elem);
            sum += `<div class="task">
                    <h5>${elem.task}<span class=${elem.
                    imp}>imp</span></h5>
                    <button id=${idx}>Mark as Completed</button>
            </div>`
        })
        allTask.innerHTML = sum;
        localStorage.setItem("currentTask", JSON.stringify(currentTask));
        document.querySelectorAll('.task button').forEach(function (btn) {
        btn.addEventListener('click', function () {
            currentTask.splice(btn.id, 1);
            renderTask();
        })
    })
    }
    renderTask()
    let form = document.querySelector('.addTask form');
    let taskInput = document.querySelector('.addTask form #task-input');
    let taskDetailsInput = document.querySelector('.addTask form textarea');
    let taskCheckbox = document.querySelector('.addTask form #check');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        currentTask.push({
            task: taskInput.value,
            details: taskDetailsInput.value,
            imp: taskCheckbox.checked
        })

        renderTask();
        taskInput.value = ''
        taskDetailsInput.value = ''
        taskCheckbox.checked = false
    })
   
}
// todoList();
var hours=Array.from({length:18},(_,idx)=>`${6+idx}:00-${7+idx}:00`)
var wholeDaySum='';
hours.forEach(function(elem){
    console.log(elem);
    wholeDaySum=wholeDaySum+`<div class="day-planner-time">
                    <p>${elem}</p>
                    <input type="text" placeholder="...">
                </div>`
    
})
var dayPalnner=document.querySelector('.day-planner');
dayPalnner.innerHTML=wholeDaySum;
var dayPlannerInput=document.querySelectorAll('.day-planner input')
console.log(dayPlannerInput);
dayPlannerInput.forEach(function(elem){
    elem.addEventListener('input',function(){
        console.log(elem.value);
    })
})