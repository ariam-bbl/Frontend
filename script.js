const fetchButton = document.querySelector("#fetch-btn");
const holidaysList = document.querySelector("#holidays-list");

fetchButton.addEventListener("click", function() {
    fetch("https://date.nager.at/api/v3/PublicHolidays/2026/NL")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            holidaysList.innerHTML = ""; 
            
            data.forEach(holiday => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<strong>${holiday.date}</strong>: ${holiday.localName} (${holiday.name})`;
                holidaysList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
            holidaysList.innerHTML = "<li>Er is iets fout gegaan bij het laden.</li>";
        });
});