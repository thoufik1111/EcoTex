document.addEventListener('DOMContentLoaded', function() {
// Loading screen hide
const loadingScreen = document.getElementById('loading-screen');
setTimeout(() => {
loadingScreen.style.display = 'none';
}, 3000);
const botImages = [
"image/AIbot.jpg",
"image/AIbot3.jpg",
"image/AIbot4.jpg",
"image/AIbot1.jpg",
"image/AIbot2.jpg",
"image/AIbot.jpg",
"image/AIbot3.jpg",
"image/AIbot4.jpg",
"image/AIbot1.jpg",
"image/AIbot8.jpg",
"image/AIbot.jpg",
"image/AIbot3.jpg",
"image/AIbot4.jpg",
"image/AIbot4.jpg",
"image/AIbot8.jpg",
"image/AIbot7.jpg",
"image/AIbot6.jpg",
"image/AIbot5.jpg",
"image/AIbot6.jpg",
"image/AIbot4.jpg",
"image/AIbot.jpg",
"image/AIbot3.jpg",
"image/AIbot4.jpg",
"image/AIbot7.jpg",
"image/AIbot3.jpg",
"image/AIbot.jpg",
"image/AIbot3.jpg",
"image/AIbot4.jpg",
"image/AIbot5.jpg"
];

const botMessages = [
"Try other materials too  🤗",
"Can you try other designs 😶",
"Awesome Chief! It was one of your best design 🔥",
"If you change some patterns it will be great ✌️",
"No the design doesn't looks good 🙃",
"Try Changing the colour and budget range 😅",
"Chief it was a good one 🚀",
"Oooh this one’s got potential 😍",
"Are you leaving for real?",
"Not bad, but I know you can do better 😉",
"Yasss, now that's the energy I’m talking about 🔥",
"Why not mix Cotton and Linen for that Casual Wear combo? So fresh 🌿",
"Beachwear in Rayon sounds breezy and fun 🌴",
"Leather for Party Wear? Omg yes, total baddie move 🔥",
"Meh… it’s missing a little magic ✨",
"Alright alright, you got my attention now 👏",
"Wool for Beachwear? Please don’t. Save yourself from the heatstroke 🥵",
"It looks trash imagine this with a bold pop of colour 🎨",
"Cotton's always a safe pick, but have you tried Satin for a little glam? ✨",
"Silk would be perfect if you're aiming for Party Wear vibes 😍",
"Linen screams Casual Wear — light, breezy, and cool 😎",
"Polyester for Sportswear? Smart move, but maybe check out Nylon too 👌",
"Wool for Winter Wear? Cozyyy! Love that ❄️🔥",
"Leather for Outdoor Wear? Now that’s a bold statement 😏",
"Not your best, but you’re getting warmer 🔥",
"Love where you're going, but swap Polyester for Nylon in Sportswear — trust me 😉",
"Maybe ditch Leather for Casual Wear and go for Cotton. More chill, less sweaty 😅",
"Hmm… it’s okay, but needs a little drama 💥",
"Are you leaving for real?"
];

let currentBotIndex = 0;
// 3D Design preview logic
document.getElementById('submitButton').addEventListener('click', function() {
const previewMessage = document.getElementById('preview-message');
const loadingSpinner = document.getElementById('loading-animation');
const wastage = document.getElementById('wastage');
const ecoScore = document.getElementById('eco-score');
previewMessage.style.display = 'none';
loadingSpinner.style.display = 'block';

setTimeout(() => {
  loadingSpinner.style.display = 'none';
  previewMessage.textContent = 'Updated 3D Design Preview';
  previewMessage.style.display = 'block';

  const randomWastage = Math.floor(Math.random() * 21);
  const randomEcoScore = Math.floor(Math.random() * 101);
  wastage.textContent = `Wastage Reduction: ${randomWastage}% reduction`;
  ecoScore.textContent = `Eco Score: ${randomEcoScore}/100`;
}, 3500);
currentBotIndex = (currentBotIndex + 1) % botImages.length;
document.getElementById("bot-img").src = botImages[currentBotIndex];
document.getElementById("bot-message").innerText = botMessages[currentBotIndex];
});

// Budget range update
document.getElementById('budget').addEventListener('input', function() {
const budgetValue = document.getElementById('budgetValue');
budgetValue.textContent = this.value;
});

// Show color picker
document.getElementById('edit-colors').addEventListener('click', function() {
const colorPicker = document.getElementById('designPreferences');
colorPicker.click();
});

// Download design message
document.getElementById('download').addEventListener('click', function() {
const downloadMessage = document.createElement('p');
downloadMessage.textContent = 'Downloading...';
downloadMessage.style.fontSize = '18px';
downloadMessage.style.color = '#03f484';
downloadMessage.style.animation = 'floating 2s infinite';

```
const sidebar = document.querySelectorAll('aside')[1];
sidebar.appendChild(downloadMessage);

setTimeout(() => {
  downloadMessage.textContent = 'Design downloaded and saved successfully!';
  setTimeout(() => {
    sidebar.removeChild(downloadMessage);
  }, 3000);
}, 3500);
```

});

// Profile, Saved Designs, Help Center modals
const profileModal = document.getElementById('profileModal');
const savedDesignsModal = document.getElementById('savedDesignsModal');
const helpCenterModal = document.getElementById('helpCenterModal');

const profileBtn = document.getElementById('profileBtn');
const savedDesignsBtn = document.getElementById('savedDesignsBtn');
const helpCenterBtn = document.getElementById('helpCenterBtn');

const closeProfile = document.getElementById('closeProfile');
const closeSavedDesigns = document.getElementById('closeSavedDesigns');
const closeHelpCenter = document.getElementById('closeHelpCenter');

// Open modals
profileBtn.onclick = () => profileModal.style.display = 'block';
savedDesignsBtn.onclick = () => savedDesignsModal.style.display = 'block';
helpCenterBtn.onclick = () => helpCenterModal.style.display = 'block';

// Close modals
closeProfile.onclick = () => profileModal.style.display = 'none';
closeSavedDesigns.onclick = () => savedDesignsModal.style.display = 'none';
closeHelpCenter.onclick = () => helpCenterModal.style.display = 'none';

// Close modals on outside click
window.onclick = function(event) {
if (event.target === profileModal) profileModal.style.display = 'none';
if (event.target === savedDesignsModal) savedDesignsModal.style.display = 'none';
if (event.target === helpCenterModal) helpCenterModal.style.display = 'block';
if (event.target === faqModal) faqModal.style.display = 'none';
};

// Help Center FAQ Modal functionality
const faqModal = document.getElementById('faq-modal');
const helpBtn = document.getElementById('help-center-btn');
const closeFaqBtn = document.querySelector('.close');
const faqQuestions = document.querySelectorAll('.faq-question');

if (helpBtn) {
helpBtn.addEventListener('click', () => {
faqModal.style.display = 'block';
});
}

if (closeFaqBtn) {
closeFaqBtn.addEventListener('click', () => {
faqModal.style.display = 'none';
});
}

faqQuestions.forEach(question => {
question.addEventListener('click', function() {
const answer = this.nextElementSibling;
answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
});
});

// Help Center: Question bar functionality (simple log demo)
const questionInput = document.querySelector('#helpCenterModal .question-bar input');
const askButton = document.querySelector('#helpCenterModal .question-bar button');

if (askButton) {
askButton.addEventListener('click', () => {
if (questionInput.value.trim() !== '') {
console.log('Question asked:', questionInput.value);
alert('Your question has been submitted!');
questionInput.value = '';
} else {
alert('Please enter your question.');
}
});
}
});
// Edit Design Modal functionality
const editDesignModal = document.getElementById('editDesignModal');
const editDesignBtn = document.getElementById('edit-design');
const closeEditDesign = document.getElementById('closeEditDesign');
const designPreviewCopy = document.getElementById('design-preview-copy');

editDesignBtn.addEventListener('click', () => {
// Copy the preview message to editor
const previewMessage = document.getElementById('preview-message');
designPreviewCopy.textContent = previewMessage.textContent;
editDesignModal.style.display = 'block';
});

closeEditDesign.addEventListener('click', () => {
editDesignModal.style.display = 'none';
});

// Simple tools logic
let activeTool = null;

document.getElementById('moveTool').onclick = () => activeTool = 'move';
document.getElementById('scaleTool').onclick = () => activeTool = 'scale';
document.getElementById('rotateTool').onclick = () => activeTool = 'rotate';
document.getElementById('drawTool').onclick = () => activeTool = 'draw';

document.getElementById('designCanvas').addEventListener('click', (e) => {
const canvas = e.target;

if (activeTool === 'move') {
alert('Move tool selected — implement move action here.');
} else if (activeTool === 'scale') {
alert('Scale tool selected — implement scale action here.');
} else if (activeTool === 'rotate') {
alert('Rotate tool selected — implement rotate action here.');
} else if (activeTool === 'draw') {
const dot = document.createElement('div');
dot.style.position = 'absolute';
dot.style.width = '8px';
dot.style.height = '8px';
dot.style.borderRadius = '50%';
dot.style.background = document.getElementById('colorTool').value;
dot.style.left = `${e.offsetX - 4}px`;
dot.style.top = `${e.offsetY - 4}px`;
canvas.appendChild(dot);
}
});
function startcomp(){
window.location.href = 'compare.html';
}
// Color tool — no extra event needed as input color directly used  wait for my instructions now
