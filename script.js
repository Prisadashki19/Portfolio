const timeContainer = document.getElementById("time-container");
const day = "10-01-2021";
const date = new Date(day);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
    const now = new Date();
    const difference = Math.floor(
        (now.getTime() - date.getTime()) / 1000
    );

    timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);