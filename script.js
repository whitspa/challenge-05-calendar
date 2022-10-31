const today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var times = []
for(i=9; i< 18;i++){
    times.push(`${i}:00`)
}
console.log(times)
var container = document.getElementsByClassName('container')[0]
for(let i=0; i<times.length; i++){
container.innerHTML+= `<div class="row">
    <div class="hour">${times[i]}</div>
    <textarea class="description ${getClass(times[i])}"></textarea>

</div>`
}

function getClass(time){
    if(time === "9:00"){
        return "present"
    }
}


// Why doesn't current day show up? 
// Use JQuery UI for Hourly layout
// Do I have my JQuery libraries properly loaded/placed?
// Do I have the correct JQuery libraries loaded?
// How to implement/execute Jquery UI widgets that I like?
// How to "Sketch In " the functionality now and then go back and edit,style etc. later
// calling the JQuery Fcn on to the HTML Element:
// copy and paste JQuery source code vs calling the JQuery fcn

