let params = new URLSearchParams(window.location.search)
let id = params.get("id")

fetch(`http://localhost:3000/events/${id}`)
    .then(response => response.json())
    .then(event => {
        let h1 = document.createElement("h1")

        h1.innerText = event.happening
        
        let showEvent = document.createElement("h2")
        showEvent.innerText = event.location + " " + event.time

        document.body.append(h1, showEvent)

    })