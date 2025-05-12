// --- THEME TOGGLE ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

// Function to apply theme
function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Check for saved theme in localStorage
if (currentTheme) {
    applyTheme(currentTheme);
} else {
    // Check for system preference if no theme is saved
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        applyTheme('dark');
    } else {
         applyTheme('light');
    }
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save the new theme preference
    let theme = 'light';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});


// --- COUNTDOWN TIMER ---
// !!! SET YOUR EVENT DATE HERE !!!
// Format: Month Day, Year Hours:Minutes:Seconds (e.g., 'May 30, 2025 18:00:00')
const eventDate = new Date('May 27, 2025 23:59:59').getTime();

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const timerEl = document.getElementById('timer');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the results
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');

    // If the countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval); // Stop the interval
        timerEl.innerHTML = "<p>The Event Has Started!</p>"; // Or "Launched!"
        timerEl.style.fontSize = '1.5rem';
        timerEl.style.fontFamily = 'var(--font-heading)';
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display timer immediately
updateCountdown();


// --- FOOTER YEAR ---
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();