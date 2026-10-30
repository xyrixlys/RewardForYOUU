
// LOGIN ELEMENTS

const loginForm = document.getElementById("login-form");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

const loginPage = document.getElementById("login-page");
const homePage = document.getElementById("home-page");


// CHECK THE PASSWORD

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const password = passwordInput.value;

  if (password === "06012026") {
    loginPage.hidden = true;
    homePage.hidden = false;
    window.scrollTo(0, 0);
    updateDayCounter();

    const music = document.getElementById("background-music");
    music.play().catch(function() {
        console.log("Press the music button to play the song.");
    });

    } else {

        errorMessage.textContent =
            "not quite, my love. think about our special day ♡";

    }

});


// OPEN AND CLOSE LETTERS

const letterButtons = document.querySelectorAll(".letter-button");

letterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const letterId = button.dataset.letter;
        const letter = document.getElementById(letterId);

        if (letter.hidden) {

            letter.hidden = false;
            button.textContent = "close this letter ♡";

        } else {

            letter.hidden = true;
            button.textContent = "open this letter 💌";

        }

    });

});


// RELATIONSHIP DAY COUNTER

function updateDayCounter() {

    const startDate = new Date(2026, 5, 1);
    const today = new Date();

    startDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const difference = today.getTime() - startDate.getTime();

    const daysTogether = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const counter = document.getElementById("day-counter");

    if (daysTogether < 0) {

        counter.textContent = "our story begins soon ♡";

    } else if (daysTogether === 0) {

        counter.textContent = "day one together ♡";

    } else {

        counter.textContent =
            daysTogether + " days together ♡";

    }
const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-button");

musicButton.addEventListener("click", function() {
    if (music.paused) {
        music.play();
        musicButton.textContent = "♫ pause our song";
    } else {
        music.pause();
        musicButton.textContent = "♫ play our song";
    }
});

music.addEventListener("play", function() {
    musicButton.textContent = "♫ pause our song";
});

music.addEventListener("pause", function() {
    musicButton.textContent = "♫ play our song";
});
}
// MESSAGES INSIDE THE STAR JAR
const starMessages = [
    "You don't have to be okay every single moment. It's okay to rest, breathe, and take your time. ♡",

    "I'm so proud of you, even on the days when you're not proud of yourself.",

    "One bad day doesn't mean you have a bad life. Tomorrow is another chance to begin again.",

    "If I could be beside you right now, I'd remind you that you don't have to face everything all at once.",

    "You are doing better than you think. Please give yourself some credit for making it this far. ♡",

    "It's okay to cry, to feel tired, and to have days when everything feels overwhelming. Be gentle with yourself.",

    "Even from far away, I'm cheering for you. I believe in you more than you know. i am so proud of you my baby.",

    "You don't need to accomplish anything today to deserve love. You are already worthy of it.",

    "Take a deep breath, drink some water, and give yourself a little break. You deserve kindness, too.",

    "Remember that you're my favorite person, not because you're perfect, but because you're you. ♡",

    "Whatever happened today, I hope you remember that one difficult moment doesn't define you.",

    "If today was hard, let's just take it one little step at a time. You don't need to figure everything out right now."
];

// GET THE HTML ELEMENTS
const jarButton = document.getElementById("jar-button");
const starMessage = document.getElementById("star-message");
const messageText = document.getElementById("message-text");
const poppedStar = document.getElementById("popped-star");

// MAKE A COPY OF THE MESSAGES
let availableMessages = [...starMessages];

jarButton.addEventListener("click", function() {

    // If all messages have been used, start again
    if (availableMessages.length === 0) {
        availableMessages = [...starMessages];
    }

    // Choose a random message
    const randomIndex = Math.floor(
        Math.random() * availableMessages.length
    );

    const selectedMessage = availableMessages[randomIndex];

    // Remove the selected message so it won't repeat
    // until all the other messages have appeared
    availableMessages.splice(randomIndex, 1);

    // Show the message
    messageText.textContent = selectedMessage;

    // Choose a star symbol
    const stars = ["✦", "★", "✧", "✩"];
    const randomStar = Math.floor(Math.random() * stars.length);

    poppedStar.textContent = stars[randomStar];

    // Restart the animation every time the jar is clicked
    starMessage.hidden = true;
    void starMessage.offsetWidth;
    starMessage.hidden = false;
});
