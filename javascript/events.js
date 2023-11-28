const froggysEventsMap = {};
fetch('https://froggy-e3fac-default-rtdb.europe-west1.firebasedatabase.app/events.json')
    .then(response => response.json())
    .then(data => {


        let eventsContainer = document.getElementById("eventsContainer")
        eventsContainer.id = "events-title";
        eventsContainer.classList.add("events")

        for (let key in data) {
            let dataarray = data[key];

        let eventsElement = document.createElement("div");
        eventsElement.classList.add("events-cards");

        // console.log( `${dataarray.date} ${dataarray.img}`);

        let titleElement = document.createElement("p");
            titleElement.classList.add("events-title");
            titleElement.textContent = dataarray.title;

        let dateElement = document.createElement("p");
            dateElement.classList.add("events-date");
            dateElement.textContent = dataarray.date;

        let descriptionElement = document.createElement("p");
            descriptionElement.classList.add("events-description");
            descriptionElement.textContent = dataarray.description;

        let imgElement = document.createElement("img");
            imgElement.classList.add("events-img");
            imgElement.src = dataarray.img;

        eventsElement.appendChild(titleElement);
        eventsElement.appendChild(dateElement);
        eventsElement.appendChild(descriptionElement);
        eventsElement.appendChild(imgElement);

        eventsContainer.appendChild(eventsElement);
        }
    })
    .catch(error => console.error('Fejl:', error));
