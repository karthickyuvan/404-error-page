const img = document.querySelector(".shake-img");

img.addEventListener("mouseenter", () => {
    let i = 0;
    const interval = setInterval(() => {
        const x = (Math.random() * 5) - 2.5; // Random small shake
        const y = (Math.random() * 5) - 2.5;
        img.style.transform = `translate(${x}px, ${y}px)`;
        i++;
        if (i > 10) { // Stop after 10 shakes
            clearInterval(interval);
            img.style.transform = "translate(0, 0)"; // Reset position
        }
    }, 50);
});
