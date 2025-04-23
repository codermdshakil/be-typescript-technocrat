{
    
/**
 * Topics:
 * 
 * 1. Spread Operator
 *   - spread operator in array
 *   - spread operator in object
 * 
 * 2. Rest operator - to reciving dynamic opetators ex : ...friends:string[]
 * 
 * 3. Destructuring
 *   - object destructuring - order not matter
 *   - array destructuring  - order matter
 * 
 * */ 

// 1. Spread Operator in array

const brothers1:string[] = ['Sagor', 'Shakil', 'Saikot', 'Siam'];
const brothers2:string[] = ['Shahin Khan', 'Masum Mia'];

// combine two array element
// brothers1.push(...brothers2);
// brothers1.push(...brothers2, 'Kamal', 'Jamal');


// copy array element
const copyArray = [...brothers2];
// console.log(brothers2 === copyArray); // false because reference differents


// 1.2. Spread Operator in object

const mentors1 = {
    ts:'Mezba',
    redux:'Mir',
    dbms:'Mizan'
};

const mentors2 = {
    prisma:'Firoz',
    next:'Tanmoy',
    cloud:'Nahid'
};

// combined two object in one
const allMentors = {...mentors1, ...mentors2};
// console.log(allMentors);



// Rest Operators
// ...friends:string[] -> rest operator recived dynamic parameter

const friendsList = (...friends:string[]):void => {
   friends.forEach((friend) => console.log(friend))
}

friendsList('Shakil', 'Asraf', 'Nadu', 'Nadim', 'Kalam');


// 2. destucturing object
// - don't matter order

 
// Object Destructuring 

const person = {
    name:'Shakil Ahmed',
    age:20,
    goal:'CEO | Billioniare',
    currentTarget:'Software Engineer'
};


const { age, goal, currentTarget }= person;
// console.log(currentTarget);


// Array destructuring 
// - order matters
const friends = ['Noyon', 'Nadim', 'Shakil',];

const [first, second, third] = friends;

// console.log(first); // Noyon
// console.log(second); // Nadim
// console.log(third); // Shakil

}

