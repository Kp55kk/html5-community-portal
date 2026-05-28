console.log("Welcome to Community Portal");

alert("Page Loaded Successfully");


const events = [

    {
        name: "Music Night",
        category: "Music",
        seats: 5
    },

    {
        name: "Coding Workshop",
        category: "Workshop",
        seats: 10
    }

];


const container = document.querySelector("#eventContainer");

const searchBox = document.querySelector("#searchBox");

const categoryFilter = document.querySelector("#categoryFilter");


function displayEvents(eventList) {

    container.innerHTML = "";

    eventList.forEach(event => {

       
        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
            <p>Seats Left: ${event.seats}</p>
            <button onclick="register('${event.name}')">
                Register
            </button>
        `;

        container.appendChild(card);

    });

}


function register(eventName) {

    try {

        const event = events.find(e => e.name === eventName);

        if (event.seats > 0) {

            event.seats--;

            alert(`Registered for ${event.name}`);

            displayEvents(events);

        } else {

            alert("No seats available");

        }

    } catch (error) {

        console.log(error);

    }

}


searchBox.addEventListener("keyup", () => {

    const value = searchBox.value.toLowerCase();

    const filtered = events.filter(event =>
        event.name.toLowerCase().includes(value)
    );

    displayEvents(filtered);

});


categoryFilter.addEventListener("change", () => {

    const category = categoryFilter.value;

    if (category === "all") {

        displayEvents(events);

    } else {

        const filtered = events.filter(event =>
            event.category === category
        );

        displayEvents(filtered);

    }

});


const form = document.querySelector("#registerForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const username = form.elements["username"].value;

    const email = form.elements["email"].value;

    const eventName = form.elements["eventName"].value;

    if (username === "" || email === "") {

        alert("Please Fill All Fields");

        return;

    }

    console.log({
        username,
        email,
        eventName
    });

    alert("Form Submitted Successfully");

});


displayEvents(events);