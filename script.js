
const today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var times = []
for (i = 9; i < 18; i++) { //This For-Loop dynamically creates the set of hours I will use in my scheduler
    times.push(`${i}:00`)
}
function getStorage(index) {
    console.log('getting storage for', index)
    const history = JSON.parse(localStorage.getItem('tasks')) || ["", "", "", "", "", "", "", "", ""];
    if (history[index]) {
        console.log(history[index])
        return history[index]
    }
    return ""
}
//var container = document.getElementById('container')
var container = document.getElementsByClassName('container')[0]
for (let i = 0; i < times.length; i++) { //This For-Loop displays the schedule rows and looks for tasks in each row to save to storage.
    container.innerHTML += `<div class="row" data-index="${i}">
    <div class="hour col-1">${times[i]}</div>
    <textarea class="description col-9 ${getClass(times[i])}">${getStorage(i)}</textarea>
    <button class="saveBtn col-2"> Save </button>
</div>` //Bootstrap documentation calls for 12 colums per row in the grid system for containers.
    //So I designated the column width of hours, text area, and button proportionally to add up to 12
}


//This is my save to local storage fcn. 
//Need help figuring out how to index  event listener to the position in the array
//I'm thinking event.target previousSibling but I'm struggling with the logic and syntax
// const container =document.querySelector(".container");
// container.addEventListener ("click", function(event)
//     const element = event.target;
// if (element.matches (".row")) {
//     const description/tasks maybe = this.previousSibling
//

// }


function saveToStorage(task, index) {
    const history = JSON.parse(localStorage.getItem('tasks')) || ["", "", "", "", "", "", "", "", ""];
    history[index] = task
    localStorage.setItem('tasks', JSON.stringify(history))
}

//function renderTasks(){
//const description/tasks = JSON.parse(localStorage.getItem("description/tasks"));
//   if (description/tasks !== null) {
//     document.querySelector(".message").textContent = description/tasks
//}

function getClass(time) {  // this function returns the current time from Moment.js
    var currentHour = moment()._d.getHours()
    time = (Number(time.split(":")[0]))
    if (time < currentHour) { //This If-Then statement evaluates all the hours in the schedule against the current hour and dynamically styles the hours according to  past, present, and future 
        return "past"
    }
    if (time > currentHour) {
        return "future"
    }
    return "present"
}

//Intrigued by the case structure but I couldn't debug it
// switch (time) { 
//     case time < currentHour:
//         return "past"
//         break;
//     case time > currentHour:
//         return "future"
//         break;
//     default:
//         return "present"
//         break;
// }

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    console.log(event.target.parentNode.children[1].value)
    console.log(event.target.parentNode.getAttribute('data-index'))
    saveToStorage(event.target.parentNode.children[1].value, event.target.parentNode.getAttribute('data-index'))
})


saveToStorage()



