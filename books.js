// Select the refresh link
const refreshLink = document.getElementById('refresh-link');

// Add a click event listener to refresh the page when clicked
refreshLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    location.reload(); // Refresh the page
});

// Typewriter effect for the "Meet your next" text
const text = "Meet your next";
const speed = 135; // Speed of typing (in milliseconds)
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // After the typewriter effect finishes, reveal the second text
        setTimeout(() => {
            document.getElementById("slow-text").classList.add("show");
        }, 250); // Delay to show the second text after typewriter effect ends
    }
}

typeWriter();

