const Event1 = document.getElementById("event");
const Eventdate = document.getElementById("event-date");
const eventButton = document.getElementById("event-button");
const eventTable = document.getElementById("event-table");
const EventTime = document.getElementById("event-time")
const eventForm = document.getElementById("event-form")

eventButton.addEventListener("click", (e)=>{
    if(!(Event1.checkValidity && EventTime.checkValidity && Eventdate.checkValidity))
        Event1.innerHTML = Event1.validationMessage
        EventTime.innerHTML = EventTime.validationMessage
        Eventdate.innerHTML = Eventdate.validationMessage
       
    e.preventDefault()
        eventTable.innerHTML += `
        <tr>
        <td>${ Event1.value}</td>
        <td>${Eventdate.value}</td>
        <td>${EventTime.value}</td>
        </tr>
        `
        
        eventForm.reset()
})