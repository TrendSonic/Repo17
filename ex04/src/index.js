const BAKING_TEMPERATURES = {
    cake: { low: 180, high: 250},
    bread: { low: 150, high: 220},
    pie: { low: 200, high: 230}
};

function main(baking) {
    // Only change code below this line

    const {bread: newBread} = BAKING_TEMPERATURES;
    const {low: lowBread, high: highBread} = newBread;

    return {lowBread, highBread};

    // Only change code above this line
}

console.log(main(BAKING_TEMPERATURES));
module.exports = main;