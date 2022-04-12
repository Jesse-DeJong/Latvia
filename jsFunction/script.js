// Calculating Moon Orbits
const earthDays = 56;

const moonOrbits = (days) => {
    const orbits = days / 27.32;
    console.log(`The moon will orbit the earth ${orbits} times in ${days} days.`);
};

moonOrbits(earthDays);

// Working with Circles
const radius = 10;

const circleArea = () => {
    const area = Math.PI * radius ** 2; 
    console.log(`The area of a circle with a radius of ${radius} is ${area}.`);
};

circleArea();

const circlePerimiter = () => {
    const perimiter = 2 * Math.PI * radius;
    console.log(`The perimiter of a cirlce with a radius of ${radius} is ${perimiter}.`);
};

circlePerimiter();