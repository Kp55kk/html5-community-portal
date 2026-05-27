function validatePhone() {

    let phone = document.getElementById("phone").value;

    if (phone.length !== 10) {
        alert("Phone number must be 10 digits");
    }
}

function showFee() {

    let fee = document.getElementById("eventType").value;

    document.getElementById("feeDisplay").innerHTML =
        "Event Fee: ₹" + fee;
}

function showConfirmation() {

    document.getElementById("outputMessage").innerHTML =
        "Registration Successful!";
}

function countCharacters() {

    let text =
        document.getElementById("feedback").value;

    document.getElementById("charCount").innerHTML =
        "Characters: " + text.length;
}

function videoReady() {

    document.getElementById("videoMessage").innerHTML =
        "Video ready to play";
}

window.onbeforeunload = function () {

    return "Your form is not completed";
};

function findLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            showPosition,
            showError,
            {
                enableHighAccuracy: true,
                timeout: 5000
            }
        );

    } else {

        alert("Geolocation not supported");
    }
}

function showPosition(position) {

    document.getElementById("location").innerHTML =
        "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude;
}

function showError(error) {

    switch (error.code) {

        case error.PERMISSION_DENIED:
            alert("Permission denied");
            break;

        case error.TIMEOUT:
            alert("Request timeout");
            break;

        default:
            alert("Location error");
    }
}

let eventType =
    document.getElementById("eventType");

eventType.addEventListener("change", function () {

    localStorage.setItem(
        "preferredEvent",
        eventType.value
    );
});

window.onload = function () {

    let saved =
        localStorage.getItem("preferredEvent");

    if (saved) {
        eventType.value = saved;
    }
};

function clearPreferences() {

    localStorage.clear();
    sessionStorage.clear();

    alert("Preferences Cleared");
}