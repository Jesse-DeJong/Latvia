// DOM Targeting
const domTargets = document.getElementsByClassName('card');

// RNG
const rng = () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    // console.log(`R:${red} G:${green} B:${blue}`);
}

// RNG Colour Loop
const generateColours = () => {
    domTargets.map((item)) = () => {
        rng();
        item.setAttribute('background-color', `rgb(${red},${green},${blue})`);
    }
}

generateColours();