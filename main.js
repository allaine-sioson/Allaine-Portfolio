const glow = document.getElementById('glow');
const options = document.querySelectorAll('button')

// Glow follows pointer
document.body.onpointermove = event => {
    const { x, y } = event;
    glow.animate({
        left: `${x}px`,
        top: `${y}px`
    }, { duration: 3000, fill: 'forwards' });
};

options.forEach(currentOption => {
    currentOption.addEventListener("mouseover", () => {

        options.forEach(option => {
            option.style.color = "var(--regular-font-color)";
            option.style.textShadow = "2px 2px 5px rgb(192, 148, 5)";
            option.style.transform = "none";
        });

        currentOption.style.color = "rgb(254, 242, 225)";
        currentOption.style.textShadow = "2px 2px 10px rgba(255, 231, 151, 0.635)";
        currentOption.style.transform = "translateX(-4vw)";
    })
});