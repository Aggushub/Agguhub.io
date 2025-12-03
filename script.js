var typed = new Typed(".text",{
    strings:["Software Engineer", "Web Developer", "AI Enthusiast"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const textEl = document.getElementById("glitchText");

    let original = "Joel Amos Philip";
    let swapped = "Aggu";
    let toggled = false;

    textEl.addEventListener("click", () => {

        // strong glitch flash
        textEl.classList.add("active");

        setTimeout(() => {
            textEl.textContent = toggled ? original : swapped;
            toggled = !toggled;

            textEl.classList.remove("active");
        }, 250); // same as animation duration
    });

window.onload = () => {
    document.getElementById("glitchText").classList.add("slideOnce");
};