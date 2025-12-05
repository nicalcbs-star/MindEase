document.getElementById("showSupport").addEventListener("click", () => {
    const mood = document.getElementById("moodSelect").value;
    const messageBox = document.getElementById("supportMessage");
    const breathingExercise = document.getElementById("breathingExercise");

    const messages = {
        overwhelmed: "Try taking a short break. Think about the biggest priority and focus on one step at a time.",
        sad: "Feelings are valid. Try journaling or messaging a friend you trust.",
        neutral: "Maybe take a walk or listen to calming music! Small actions brighten the day.",
        good: "Awesome! Keep that energy. Make progress on something meaningful today."
    };

    if (!mood) {
        messageBox.textContent = "Please select a mood first.";
        breathingExercise.classList.add("hidden");
    } else {
        messageBox.textContent = messages[mood];
        
        // Show breathing exercise for overwhelmed or sad moods
        if (mood === "overwhelmed" || mood === "sad") {
            breathingExercise.classList.remove("hidden");
        } else {
            breathingExercise.classList.add("hidden");
        }
    }

    messageBox.classList.remove("hidden");
});

// Breathing animation text cycle
setInterval(() => {
    const text = document.getElementById("breathingText");
    if (!text) return;
    text.textContent = text.textContent === "Breathe In..." ? "Breathe Out..." : "Breathe In...";
}, 3000);

// Motivational Quote Generator
const quotes = [
    "You don't need to do everything today, just take the next step.",
    "Small progress is still progress.",
    "Your effort is more important than perfection.",
    "You're stronger than you think.",
    "Your future self will thank you for today.",
    "It's okay to ask for help, that's a sign of strength.",
    "One day at a time, one step at a time.",
    "You are worthy of care, rest, and kindness."
];

document.getElementById("newQuote").addEventListener("click", () => {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteArea").textContent = quotes[random];
});

// Pomodoro Study Timer
document.getElementById("startTimer").addEventListener("click", () => {
    let time = 5 * 60;
    const display = document.getElementById("timerDisplay");
    const button = document.getElementById("startTimer");
    
    button.disabled = true;
    button.textContent = "Timer Running...";

    const countdown = setInterval(() => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        display.textContent = `${min}:${sec < 10 ? "0" + sec : sec}`;
        time--;

        if (time < 0) {
            clearInterval(countdown);
            display.textContent = "Great job! Take a break! 🎉";
            button.disabled = false;
            button.textContent = "Start 5-Minute Focus Timer";
        }
    }, 1000);
});
