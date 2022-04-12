//
const root = document.getElementById('switch');
const root2 = document.getElementById('switch2');

// Tell me the day!
const day = 2;

const switchCase = () => {
switch (day) {
    case 0:
        root2.innerHTML = "Sunday";
        break;
    case 1:
        root2.innerHTML = "Monday";
        break;
    case 2:
        root2.innerHTML = "Tuesday";
        break;
    case 3: 
        root2.innerHTML = "Wednesday";
        break;
    case 4:
        root2.innerHTML = "Thursday";
        break;
    case 5:
        root2.innerHTML = "Friday";
        break;
    case 6:
        root2.innerHTML = "Saturday";
        break;
    default:
        root2.innerHTML = "Invalid day";
    }
}

switchCase();

// Eye Colour
const parents = {
    parent1: "brown",
    parent2: "green"
};

const eyeCol = () => {
    
    switch (true) {
        case parents.parent1 == "brown" && parents.parent2 == "brown":
        var brown = "75%";
        var green = "18.75%";
        var blue = "6.25%"
        eyeColOutput(brown, green, blue);
        break;
        
        case parents.parent1 == "green" && parents.parent2 == "brown":
        case parents.parent1 == "brown" && parents.parent2 == "green":
        var brown = "50%";
        var green = "37.5%";
        var blue = "12.5%";
        eyeColOutput(brown, green, blue);
        break;

        case parents.parent1 == "blue" && parents.parent2 == "brown":
        case parents.parent1 == "brown" && parents.parent2 == "blue":
        var brown = "50%";
        var green = "0%";
        var blue = "50%";
        eyeColOutput(brown, green, blue);
        break;
        
        case parents.parent1 == "green" && parents.parent2 == "green":
        var brown = "<1%";
        var green = "75%";
        var blue = "25%";
        eyeColOutput(brown, green, blue);
        break;

        case parents.parent1 == "green" && parents.parent2 == "blue":
        case parents.parent1 == "blue" && parents.parent2 == "green":
        var brown = "0%";
        var green = "50%";
        var blue = "50%";
        eyeColOutput(brown, green, blue);
        break;

        case parents.parent1 == "blue" && parents.parent2 == "blue":
        var brown = "0%";
        var green = "1%";
        var blue = "99%";
        eyeColOutput(brown, green, blue);
        break;
    }
}

const eyeColOutput = (brown, green, blue) => {
    root.innerHTML = `Your eye colours are ${parents.parent1} and ${parents.parent2}, 
    the chances of your child having brown eyes is ${brown}, green is ${green}, and blue is ${blue}`;
}

eyeCol();