console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (let i = 0; i < count; i++) {
        //Check if i is an odd number
        if (i % 2 != 0) {
            console.log(i);
        }
    }
    for (let i = 0; i < count; i++) {
        //Check if i is an odd number
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printOdds(47);
printOdds(-6);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
/*
//If the userName is a falsy value
//undefined and ""
if (!userName) {
    //End the function early. Do not continue past here.
    //Do not pass GO. Do not collect $200
    return;
}
*/

function checkAge(userName, age) {
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (age < 16 || !age) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}
checkAge("Dan", 9);
checkAge("Dan", 21);
checkAge("Dan");
checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y) {
    if (x == 0 && y == 0) {
        console.log("Origin");
    } else if (x == 0) {
        console.log("Y-Axis");
    } else if (y == 0) {
        console.log("X-Axis");
    } else if (x > 0 && y > 0) {
        console.log("Quadrant 1");
    } else if (x < 0 && y > 0) {
        console.log("Quadrant 2");
    } else if (x < 0 && y < 0) {
        console.log("Quadrant 3");
    } else if (x > 0 && y < 0) {
        console.log("Quadrant 4");
    }
}

whichQuadrant(0, 0);
whichQuadrant(-5, 0);
whichQuadrant(0, 15);
whichQuadrant(-4, -4);
whichQuadrant(-4, 5);
whichQuadrant(3, 3);
whichQuadrant(3, -7);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function whichTriangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid Triangle";
    }
    if (a == b && b == c) {
        return "Equilateral";
    }
    else if (a != b && a != c && b != c) {
        return "Scalene";
    }
    else {
        return "Isosceles";
    }
}

console.log(whichTriangle(3, 4, 5));
console.log(whichTriangle(3, 3, 3));
console.log(whichTriangle(2, 2, 5));
console.log(whichTriangle(2, 2, 3));

// Exercise 5 Section
function dataPlan(planLimit, day, usage) {
    //Information Gathering
    const daysRemaining = 30 - day;
    const dataRemaining = planLimit - usage;
    const avgUsageSoFar = usage / day;
    const avgIdealUsage = planLimit / 30;
    const projectedUsage = avgUsageSoFar * 30;
    const projectedDataRemaining = planLimit - (projectedUsage);
    const newIdealAvg = dataRemaining / daysRemaining;

    //Plug in the variables
    console.log(`${day} days used, ${daysRemaining} days remaining\nIdeal average daily use: ${avgIdealUsage.toFixed(2)} GB/day.`);

    //If they are expected to go over their data plan limit
    if (projectedDataRemaining < 0) {
        console.log(`You are EXCEEDING your average daily use (${avgUsageSoFar.toFixed(2)} GB/day).\nContinuing this high usage, you'll exceed your data plan by ${Math.abs(projectedDataRemaining)} GB.\nTo stay below your data plan, use no more than ${newIdealAvg.toFixed(2)} GB/day.`);
    } else if (projectedDataRemaining > 0) {
        console.log(`You are BELOW your average daily use (${avgUsageSoFar.toFixed(2)} GB/day).\nContinuing this low usage, you'll have ${Math.abs(projectedDataRemaining)} GB left over.\nTo maximize your data plan, use ${newIdealAvg.toFixed(2)} GB/day.`);
    } else {
        console.log(`You are perfectly matching your average daily use (${avgUsageSoFar.toFixed(2)} GB/day).\nContinuing this usage, you'll have ${Math.abs(projectedDataRemaining)} GB left over.\nGood job.`);
    }
}

//dataPlan(100, 15, 56);
//dataPlan(100, 15, 47);
dataPlan(100, 15, 50);