// let bill = 275;
// let tip = bill <= 300 && bill >=50 ? bill * 0.15 : bill * .20;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);


// const calcTip = function(bill) {

// return bill <= 300 && bill >=50 ? bill * 0.15 : bill * .20;
// console.log(bill);
// }

// calcTip(100);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

// console.log(bills, tips, totals);
// // console.log(tips);


//OBEJCTS ----//

const stephen = {
firstName: 'Stephen',
surName: 'Ray',
age: 30,
job: 'SBB Country Coordinator',
friends: ['Ais', 'Charlie', 'Tim']
};


// console.log(stephen['friends']);

const interestedIn = prompt("What would you like to know about Stephen? Choose between - firstName, surName, age, job, friends");
if (stephen[interestedIn]) {
console.log(stephen[interestedIn]);
}
else {

console.log("Invalid input. Please enter a valid option. Choose between - firstName, surName, age, job, friends");
}



stephen.location ='Dublin';
stephen['twitter'] = '@HandOfDog420';
console.log(stephen);

//"Stephen has 3 friends , his best friend is called Ais."


console.log(`${stephen.firstName} has ${stephen.friends.length}, his best friend is called ${stephen.friends[2]}.`);