document.addEventListener("DOMContentLoaded", function() {
    const answerElement = document.getElementById("answer");

    function isPathfinderTime() {
        const now = new Date();
        const currentDay = now.getUTCDay(); // Get current day in UTC (0 = Sunday, 1 = Monday, ..., 2 = Tuesday, etc.)
        const currentHour = now.getUTCHours();
        const currentMinutes = now.getUTCMinutes();
        
        const startHourEST = 20; // 8:30 PM EST
        const endHourEST = 23;  // 11:00 PM EST

        const startTimeUTC = startHourEST + 4; // Convert EST to UTC (add 4 hours)
        const endTimeUTC = endHourEST + 4;

        if (currentDay === 2) { // Check if it's Tuesday (Tuesday in UTC is still Tuesday in EST)
            if (currentHour > startTimeUTC || (currentHour === startTimeUTC && currentMinutes >= 30)) {
                if (currentHour < endTimeUTC || (currentHour === endTimeUTC && currentMinutes === 0)) {
                    return true;
                }
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
