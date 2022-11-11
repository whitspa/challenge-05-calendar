
//save text to local storage
//saved events persist after refresh

const history = JSON.parse(localStorage.getItem('tasks')) || ["", "", "", "", "", "", "", "", ""];

console.log(moment().isSame('13:00', 'hour'))
console.log(moment().hour())
console.log(moment()._d.getHours())
console.log(typeof((moment()._d.getHours())))
const today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var times = []  
for(i=9; i< 18;i++){ //This For-Loop dynamically creates the set of hours I will use in my scheduler
    times.push(`${i}:00`)
}
console.log(times)

//var container = document.getElementById('container')
var container = document.getElementsByClassName('container')[0]
for(let i=0; i<times.length; i++){ //This For-Loop displays the schedule rows //
container.innerHTML+= `<div class="row" data-index="${i}">
    <div class="hour col-1">${times[i]}</div>
    <textarea class="description col-9 ${getClass(times[i])}">${history[i]}</textarea>
    <button class="saveBtn col-2"> Save </button>
</div>` //Bootstrap documentation calls for 12 colums per row in the grid system for containers.
 //So I designated the column width of hours, text area, and button proportionally to add up to 12
}

 //This is my save to local storage fcn. 
//Need help figuring out how to index  event listener to the position in the array
//I'm thinking event.target previousSibling but I'm struggling with the logic and syntax
//also 
// const container =document.querySelector(".container");
// container.addEventListener ("click", function(event)
//     const element = event.target;
// if (element.matches (".row")) {
//     const description = this.previousSibling
// }


// function saveToStorage(description) {

//console.log(history);
// history.push(description)
// localStorage.setItem('tasks', JSON.stringify(history))
// }

//function renderTasks(){

function getClass(time){  // this function returns the current time from Moment.js
    var currentHour = moment()._d.getHours()
    time = (Number(time.split(":")[0]))
    console.log(time < currentHour)
    if (time < currentHour){ //This If-Then statement evaluates all the hours in the schedule against the current hour and dynamically styles the hours according to  past, present, and future 
        return "past"
    }
    if (time > currentHour){
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

$(".saveBtn").on("click",function(event) {
  event.preventDefault();
    
  const description = 
  document.getElementsByClassName("description").textContent;
  
})

console.log("row");


//saveToStorage()



