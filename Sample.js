document.addEventListener('DOMContentLoaded', function() {
    // Loading screen timeout
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
    }, 3000);
    const text = document.querySelector(".sec-text");

    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "ECOTEX";
        }, 0); // Start with Freelancer
        setTimeout(() => {
            text.textContent = "AI-design";
        }, 4000); // Change to Blogger after 4 seconds
        setTimeout(() => {
            text.textContent = "Innovation";
        }, 8000); // Change to YouTuber after 8 seconds
    };

    textLoad();
    setInterval(textLoad, 12000); // Restart the cycle every 12 seconds

    // Initial check for section visibility
    const sections = document.querySelectorAll('.section');
    
    function checkSectionVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }
    const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
        // Hide the main page header text when the sidebar is closed
        if (sidebar.classList.contains("close")) {
            body.querySelector('.header-left .logo-text').style.display = 'none'; // Hide in main header
        } else {
            body.querySelector('.header-left .logo-text').style.display = 'flex'; // Show in main header
        }
    });

    searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close");
        body.querySelector('.header-left').style.display = 'flex'; // Ensure header is visible
    });

    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
        
        if (body.classList.contains("dark")) {
            modeText.innerText = "Light mode";
        } else {
            modeText.innerText = "Dark mode";
        }
    });

    window.addEventListener('scroll', checkSectionVisibility);
    checkSectionVisibility(); // Initial check

    // Initial instruction description
    showDescription(currentStep);

    // Cursor follow glowing effect
    const trailContainer = document.getElementById('loading-screen');
    
    document.addEventListener('mousemove', function(e) {
        const trail = document.createElement('div');
        trail.className = 'trail';
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
        trailContainer.appendChild(trail);

        // Remove the trail after the animation is complete
        setTimeout(() => {
            trail.remove();
        }, 500);
    });
});

// Toggle rolling box visibility
function toggleRollingBox() {
    var rollingBox = document.getElementById('rolling-box');
    rollingBox.classList.toggle('active');
}

// Show description for the corresponding step
let currentStep = 1;
const totalSteps = 5;
const changeInterval = 7000; // 10 seconds

function showDescription(step) {
    for (let i = 1; i <= totalSteps; i++) {
        document.getElementById(`desc${i}`).classList.remove('active');
        document.querySelector(`.step-btn:nth-child(${i})`).classList.remove('active');
    }
    document.getElementById(`desc${step}`).classList.add('active');
    document.querySelector(`.step-btn:nth-child(${step})`).classList.add('active');
    currentStep = step;
}

// Automatically change to the next step
function nextStep() {
    currentStep = currentStep % totalSteps + 1;
    showDescription(currentStep);
}

setInterval(nextStep, changeInterval);

// Redirection functions
function redirectToSignIn() {
    window.location.href = 'signin.html'; // Redirect to the sign-in page
}

function startFreeTrial(){
    window.location.href = 'freetrial.html';
}
