// Funny lines and meme images
const funnyLines = [
    " 2026 mein to duniya khatam ho jaegee.! ‍🙆‍♂👽"
];

const memeImages = [
    "https://i.pinimg.com/736x/23/7f/91/237f91ffcefe51e665e7fd9edb65cfde.jpg",
    "https://i.pinimg.com/736x/23/7f/91/237f91ffcefe51e665e7fd9edb65cfde.jpg",
];

// Create star tunnel effect
function createStars(count=100){
    for(let i=0;i<count;i++){
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.setProperty("--x",(Math.random()-0.5)*2);
        star.style.setProperty("--y",(Math.random()-0.5)*2);
        document.body.appendChild(star);
    }
}
createStars();

// Activate Time Machine
function activateMachine() {
    const body = document.body;
    const sound = document.getElementById("timeSound");
    const output = document.getElementById("output");
    const countingText = document.getElementById("countingText");

    // Reset previous
    output.classList.remove("show");
    output.innerHTML = "";
    countingText.innerHTML = "";
    body.classList.remove("flash");
    body.classList.remove("shake");

    // Start sound & shake
    sound.currentTime = 0;
    sound.play();
    body.classList.add("shake");
    body.classList.add("flash");

    // Animate "সময় গণনা হচ্ছে..."
    let dots = 0;
    const interval = setInterval(() => {
        dots = (dots + 1) % 4;
        countingText.innerHTML = "⏳ সময় গণনা হচ্ছে" + ".".repeat(dots);
    }, 500);

    // After suspense, show the final line with meme image
    setTimeout(() => {
        clearInterval(interval);
        countingText.innerHTML = "";
        body.classList.remove("shake");
        body.classList.remove("flash");

        output.classList.add("show");
        output.innerHTML = funnyLines[0] + "<br>";

        const randomImg = memeImages[Math.floor(Math.random() * memeImages.length)];
        output.innerHTML += `<br><img src="${randomImg}" alt="meme">`;
    }, 4000);
}