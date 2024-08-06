document.addEventListener("DOMContentLoaded", function() {
    const answerElement = document.getElementById("answer");

    function isPathfinderTime() {
        const now = new Date();
        const currentHour = now.getUTCHours();
        const currentMinutes = now.getUTCMinutes();
        const startHourEST = 20; // 8:30 PM EST
        const endHourEST = 23;  // 11:00 PM EST

        const startTimeUTC = startHourEST + 4; // Convert EST to UTC (add 4 hours)
        const endTimeUTC = endHourEST + 4;

        if (currentHour > startTimeUTC || (currentHour === startTimeUTC && currentMinutes >= 30)) {
            if (currentHour < endTimeUTC || (currentHour === endTimeUTC && currentMinutes === 0)) {
                return true;
            }
        }

        return false;
    }

    if (isPathfinderTime()) {
        answerElement.textContent = "Yes";
    } else {
        answerElement.textContent = "No";
    }
});
