//console.log("hit")
fetch("http://localhost:3000/events")
    .then(response => response.json())
    //.then(console.log)
    .then(displayEvents)

function displayEvents(events){
    events.forEach(event => {
        const h2 = document.createElement("h3")
        h2.innerHTML = `<a href=event.html?id=${event.id}>${event.happening}</a>`
        document.body.append(h2)
    })    
}