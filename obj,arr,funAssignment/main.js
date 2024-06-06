var people = {
    friends: []
};
// 2. Create three separate objects, each representing a friend, with properties like firstName, lastName,
// and optionally id.
var friend1 = {
    firstname: "maham",
    lastname: "amjad",
    id: 1
};
var friend2 = {
    firstname: "fabiha",
    lastname: "ali",
    id: 2
};
var friend3 = {
    firstname: "shiza",
    lastname: "faiz",
    id: 3
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
//------------------------------------------------------xx-------------------------------------------------///
//Assignment 2:Manipulating an Array: Rearranging Words
// Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
//using tostring method through map method to convert non string values to string
var stringifiedArray = scrambledArray.map(function (elem) { return elem.toString(); });
console.log(stringifiedArray);
// result of stringifiedarray will be this ['student', 'of','true', '123', 'am', 'a','GIAIC', 'I']
//declaring an empty array of type string to hold string values
var reArrangedArray = [];
//pushiing the values in the empty array to rearrange the scrambled array
reArrangedArray.push(stringifiedArray[7]);
reArrangedArray.push(stringifiedArray[4]);
reArrangedArray.push(stringifiedArray[5]);
reArrangedArray.push(stringifiedArray[0]);
reArrangedArray.push(stringifiedArray[1]);
reArrangedArray.push(stringifiedArray[6]);
console.log(reArrangedArray);
//using join method to join array values as sstring and assigning its value to a new variable
var result = reArrangedArray.join(" ");
//printing the result
console.log(result);
//------------------------------------------------------xx-------------------------------------------------///
//Assignment 3: Company Product Catalog
//Define an array named inventory to store product information
var inventory = [];
//Create three separate objects, each representing a product, with properties like name, model, cost, and quantity
var product1 = {
    name: 'Laptop',
    model: "Xyz",
    cost: 200000,
    quantity: 10
};
var product2 = {
    name: 'Desktop',
    model: "Abc",
    cost: 20000,
    quantity: 10
};
var product3 = {
    name: 'Macbook',
    model: "def",
    cost: 200000,
    quantity: 10
};
//Add these product objects to the inventory array using an appropriate array method.
inventory.push(product1, product2, product3);
//Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
console.log(inventory[0].quantity, inventory[1].name, inventory[0].name);
var studentList = [
    { name: "maham", isSenior: false, hasCompletedAssignments: true },
    { name: "waniya", isSenior: true, hasCompletedAssignments: true },
    { name: "sidra", isSenior: false, hasCompletedAssignments: false },
    { name: "sanobar", isSenior: true, hasCompletedAssignments: true },
    { name: "misbah", isSenior: true, hasCompletedAssignments: false },
    { name: "fabiha", isSenior: false, hasCompletedAssignments: false },
];
//Find Senior Students with Assignments (Optional):
//  The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
function findSeniorStudentsWithAssignments(students) {
    return studentList.filter(function (student) { return student.isSenior && student.hasCompletedAssignments; });
}
var seniorStudents = findSeniorStudentsWithAssignments(studentList);
console.log(seniorStudents);
function removeNonCompletingStudents(students) {
    return students.filter(function (student) { return student.hasCompletedAssignments; });
}
// Update the original list
studentList = removeNonCompletingStudents(studentList);
// Log the updated student list
console.log("Updated student list:", studentList);
