const form = document.querySelector("#eventForm");
const output = document.querySelector("#output");

function updateTypeFields() {
    const type = form.type.value;
    const studentContainer = document.querySelector("#studentIDContainer");
    const accessContainer = document.querySelector("#accessCodeContainer");

    studentContainer.hidden = type !== "student";
    accessContainer.hidden = type !== "guest";
}

form.type.addEventListener("change", updateTypeFields);

// Checks if the user's chosen date is later than the current date.
function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.type.value;
    const eventDate = form.eventDate.value;
    const studentID = form.studentID.value.trim();

    if (isPastDate(eventDate)) {
        output.textContent = "Invalid Event Date!"
        return;
    }

    if (type === "student" && form.studentID.value.toString().length !== 9) {
        output.textContent = "Student I# must be 9 digits";
        return;
    }

    if (type === "guest" && form.accessCode.value.trim() !== "EVENT131") {
        output.textContent = "Invalid Access Code";
        return;
    }

    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${type}</p>
    <p>${eventDate}</p>
    `;

    form.reset();
    updateTypesField();
})

