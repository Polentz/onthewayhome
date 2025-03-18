const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

const draggableElems = document.querySelectorAll(".draggable, .block");
let draggies = []
for (let i = 0; i < draggableElems.length; i++) {
    let draggableElem = draggableElems[i];
    let draggie = new Draggabilly(draggableElem, {
    });
    draggies.push(draggie);
}

const soundElement = () => {
    const buttons = document.querySelectorAll(".audio");
    buttons.forEach(button => {
        const playButton = button.querySelector(".audio-button")
        const svg = button.querySelector(".audio-svg");
        const audio = button.querySelector(".audio-file");
        playButton.addEventListener("click", () => {
            svg.classList.toggle("play");
            if (audio.paused) {
                audio.play();
                playButton.innerHTML = "STOP";
            } else {
                audio.pause();
                playButton.innerHTML = "PLAY";
            };
        });
        audio.addEventListener("timeupdate", () => {
            if (audio.duration === audio.currentTime) {
                svg.classList.remove("play");
                playButton.innerHTML = "PLAY";
            };
        });
    });
};

window.addEventListener("load", () => {
    documentHeight();
});

window.addEventListener("resize", () => {
    documentHeight();
});