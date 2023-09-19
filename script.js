document.addEventListener('DOMContentLoaded', function () {
    // Get the music section element
    const musicSection = document.getElementById('music-page');

    // Get the footer element (Replace 'footer' with your footer element ID or class)
    const footer = document.getElementById('footer');

    // Get the Back to Top button element
    const backToTopButton = document.querySelector('.back-to-top');

    // Function to show or hide the Back to Top button based on scroll position
    function toggleBackToTopButton() {
        if (window.scrollY > musicSection.offsetTop && window.scrollY + window.innerHeight < footer.offsetTop) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    }

    // Function to scroll to the top of the page when Back to Top button is clicked
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Attach the toggleBackToTopButton function to the window scroll event
    window.addEventListener('scroll', toggleBackToTopButton);

    // Attach the scrollToTop function to the Back to Top button's onclick event
    backToTopButton.onclick = scrollToTop;
});


// Function to show the popup with the album image, title, and listen URL
function showPopup(imageSrc, title, listenURL) {
    const popupContainer = document.getElementById('popup-container');
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const listenLink = document.getElementById('listen-link');
    const body = document.querySelector('body');

    popupImage.src = imageSrc;
    popupTitle.textContent = title;
    listenLink.href = listenURL;
    popupContainer.style.display = 'flex';

    // Prevent scrolling on the rest of the page
    body.style.overflow = 'hidden';
}

// Function to hide the popup
function hidePopup() {
    const popupContainer = document.getElementById('popup-container');
    const body = document.querySelector('body');

    popupContainer.style.display = 'none';

    // Restore scrolling on the rest of the page
    body.style.overflow = 'auto';
}




function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    if (navMenu.style.right === "0px") {
        navMenu.style.right = "-300px"; // Slide out
    } else {
        navMenu.style.right = "0px"; // Slide in
    }
}

// Close the menu when clicking anywhere else on the screen
window.addEventListener("click", function (event) {
    const navMenu = document.getElementById("navMenu");
    const hamburger = document.querySelector(".hamburger");

    if (event.target !== navMenu && event.target !== hamburger) {
        navMenu.style.right = "-300px";
    }
});


// Define an array of random lyrics
const lyricsArray = [
    "\"Knew from the jump I was nice, \nI never needed the hype\" \n- THE COUP",

    "\"No matter the domain I'm at, \nmy city is what I put on. I dress different\" \n- THE COUP",

    "\"I'm so Waff like 6ix and Erigga\" \n- THE COUP",

    "\"Used to talk rap and not bring my name up. \nOne verse after I f**ked the game up\" \n- THE COUP",

    "\"You can have all the credit, \nGimme the cash make i disappear\" \n- THE COUP",

    "\"Juju dey find blood, you wan give am beer\" \n- THE COUP",

    "\"Came to collect the respect the game owes us. \nWe been woke in this b**ch and y'all dozed off\" \n- THE COUP",

    "\"Y'all napped on the kid now I'm kidnapping y'all\" \n- THE COUP",

    "\"When you talking bout them VECs and YCEEs, \nNo forget about them Paper boys and TenTiks\" \n- THE COUP",

    "\"Young OG for the game, you know the matter. \nI’ve been a G since 200 naira for dollar\" \n- 2020 viSiON",

    "\"Too dirty for white collar\" \n- 2020 viSiON",

    "\"Life short, but the money we stack taller\" \n- 2020 viSiON",

    "\"So ahead of time I’ve been keeping my social distance\" \n- 2020 viSiON",

    "\"I break rules to the game, mehn I don’t follow. \nI do whatever I want it’s grand theft auto\" \n- 2020 viSiON",

    "\"In Hell’s Kitchen cooking the last supper. \nUntil the lord comes I’m eating with my brothers\" \n- 2020 viSiON",

    "\"You wanna know if God exists, go look for yourself\" \n- 2020 viSiON",

    "\"So ahead of time I’ve been keeping my social distance\" \n- 2020 viSiON",
];

// Function to get a random lyric from the array
function getRandomLyric() {
    const randomIndex = Math.floor(Math.random() * lyricsArray.length);
    return lyricsArray[randomIndex];
}

// Function to display the random lyric
function displayRandomLyric() {
    const randomLyric = getRandomLyric();
    const lyricsDisplayElement = document.getElementById("randomLyricsDisplay");
    lyricsDisplayElement.innerHTML = randomLyric.replace(/\n/g, "<br>");
}

// Call the function when the page is loaded or refreshed
window.onload = displayRandomLyric;

