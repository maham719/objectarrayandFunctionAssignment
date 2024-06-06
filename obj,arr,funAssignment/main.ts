//Assignment 1: Building Your Friend List
//1. Define an object named people containing an empty array called friends.
type People = {
    friends: Friend[];
}

type Friend = {
    firstname: string;
    lastname: string;
    id?: number
}

let people: People = {
    friends: []
};

// 2. Create three separate objects, each representing a friend, with properties like firstName, lastName,
// and optionally id.

let friend1: Friend = {
    firstname: "maham",
    lastname: "amjad",
    id: 1
}

let friend2: Friend = {
    firstname: "fabiha",
    lastname: "ali",
    id: 2
}

let friend3: Friend = {
    firstname: "shiza",
    lastname: "faiz",
    id: 3
}

people.friends.push(friend1, friend2, friend3);
console.log(people);

//------------------------------------------------------xx-------------------------------------------------///

//Assignment 2:Manipulating an Array: Rearranging Words
// Scrambled Array:
// o Start with an array of elements in a scrambled order, like:

const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
//using tostring method through map method to convert non string values to string
const stringifiedArray = scrambledArray.map(elem => elem.toString());
console.log(stringifiedArray);
// result of stringifiedarray will be this ['student', 'of','true', '123', 'am', 'a','GIAIC', 'I']

//declaring an empty array of type string to hold string values
const reArrangedArray :string[]= [];

//pushiing the values in the empty array to rearrange the scrambled array
reArrangedArray.push(stringifiedArray[7]);
reArrangedArray.push(stringifiedArray[4]);
reArrangedArray.push(stringifiedArray[5]);
reArrangedArray.push(stringifiedArray[0]);
reArrangedArray.push(stringifiedArray[1]);
reArrangedArray.push(stringifiedArray[6]);

console.log(reArrangedArray);

//using join method to join array values as sstring and assigning its value to a new variable
let result=reArrangedArray.join(" ");
//printing the result
console.log(result);

//------------------------------------------------------xx-------------------------------------------------///

//Assignment 3: Company Product Catalog

//Define an array named inventory to store product information


let inventory:Product[]=[];

type Product = {
    name: string;
    model:string;
    cost:number;
    quantity:number
}

//Create three separate objects, each representing a product, with properties like name, model, cost, and quantity

let product1:Product={
    name:'Laptop',
    model:"Xyz",
    cost:200000,
    quantity:10
}

let product2:Product={
    name:'Desktop',
    model:"Abc",
    cost:20000,
    quantity:10
}

let product3:Product={
    name:'Macbook',
    model:"def",
    cost:200000,
    quantity:10
}
//Add these product objects to the inventory array using an appropriate array method.
inventory.push(product1,product2,product3);

//Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
console.log(inventory[0].quantity,inventory[1].name,inventory[0].name);


//------------------------------------------------------xx-------------------------------------------------///

//Assignment 4: Student List Organizer

//1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.

interface Student {
    name:string;
    isSenior:boolean;
    hasCompletedAssignments:boolean;
}

let studentList:Student[]=[
    {name:"maham" , isSenior:false , hasCompletedAssignments:true},
    {name:"waniya" , isSenior:true , hasCompletedAssignments:true},
    {name:"sidra" , isSenior:false , hasCompletedAssignments:false},
    {name:"sanobar" , isSenior:true , hasCompletedAssignments:true},
    {name:"misbah" , isSenior:true , hasCompletedAssignments:false},
    {name:"fabiha" , isSenior:false , hasCompletedAssignments:false},

];
//Find Senior Students with Assignments (Optional):
//  The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
 
function findSeniorStudentsWithAssignments(students:Student[]){
    return studentList.filter((student) => student.isSenior && student.hasCompletedAssignments);

}
const seniorStudents=findSeniorStudentsWithAssignments(studentList);
console.log(seniorStudents);

//Class List Update:
// Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
function removingStudentsWithoutssignments(students: Student[]): Student[] {
    return students.filter(student => student.hasCompletedAssignments);
}

// Update the original list
studentList = removingStudentsWithoutssignments(studentList);

// Log the updated student list
console.log("Updated student list:", studentList);


