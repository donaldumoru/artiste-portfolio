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

    "\"Used to have nothing to lose with something to prove. \nNow I have everything with nothing to prove\" \n- NOTHING TO PROVE",

    "\"We outside and we eating it’s a picnic\" \n- NOTHING TO PROVE",

    "\"You see me cutting off snakes? it’s just reflex\" \n- NOTHING TO PROVE",

    "\"Bad boy, walking with faith, I took Big steps\" \n- NOTHING TO PROVE",

    "\"Cut from the type of cloth you no fit press\" \n- NOTHING TO PROVE",

    "\"I am in real life who I am on the mic\" \n- BLAQ FRIDAY",

    "\"You can have all the hype and all the cosigns. \nWithout the hypeman, still amoshine\" \n- BLAQ FRIDAY",

    "\"Trust is something you gotta earn on the street \nbut trust nobody that's what I learned from the streets\" \n- BLAQ FRIDAY",

    "\"Came in the game on my own, with no fame or cash. \nJust a hungry Jay-Z with no Damon dash\" \n- BLAQ FRIDAY",

    "\"I was really in the middle East, holding down the West\" \n- BLAQ FRIDAY",

    "\"All I need in this life of sin, \na big fat kpoli and a bottle of drink\" \n- SUMMER VIBE",

    "\"Gimme light make I dey see front. \nNo be say I better pass my neighbor\" \n- SUMMER VIBE",

    "\"Party like we no get another life. \nClaro for hand pass kpo weh dem never buy\" \n- SUMMER VIBE",

    "\"Every mallam with e kettle and e wallet\" \n- SUMMER VIBE",

    "\"I no need your two cents, keep am for your pocket\" \n- SUMMER VIBE",

    "\"They tripping cos I stay dripping. \nEverything fly, even the rap na pidgin\" \n- SUMMER VIBE",

    "\"I just wanna live my life happy, make enjoyment show for my autopsy\" \n- SUMMER VIBE",
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

