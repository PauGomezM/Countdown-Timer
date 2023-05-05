const newYears = "Happy New Year!";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    console.log(newYearsDate - currentDate);
}

countdown();