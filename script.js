//convert time fcn to present
//create time coding for past and future
//save text to local storage
//saved events persist after refresh

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
var container = document.getElementsByClassName('container')[0]
for(let i=0; i<times.length; i++){ //This For-Loop displays the schedule rows //
container.innerHTML+= `<div class="row"> 
    <div class="hour col-1">${times[i]}</div>
    <textarea class="description col-9 ${getClass(times[i])}"></textarea>
    <button class = "col-2"> Save </button>
</div>` //Bootstrap documentation calls for 12 colums per row so I designated the column width of hours, text area, and button proportionally to add up to 12
}

function renderTasks(){ //This is the start of my save to local storage fcn. Need to add event listener etc.
   history=  JSON.parse(localStorage.getitem('tasks')) || [null, null, null, null, null, null, null, null, null]

}

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
}




