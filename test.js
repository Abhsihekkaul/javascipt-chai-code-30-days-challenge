// Just solving some questions around map, filter and reduce funtion

/*

Certainly! Here are 15 real-world questions about map, filter, and reduce functions:

Basic Questions
How would you use the map function to transform an array of user objects into an array of their email addresses?

Given an array of strings, how can you use the map function to convert each string to uppercase?

How would you use the filter function to get a list of active users from an array of user objects?

How can you use the filter function to remove all duplicate items from an array of numbers?

How would you use the reduce function to find the maximum value in an array of numbers?

Intermediate Questions
Given an array of orders with amount and status, how can you use map to calculate the total amount of each order and include the currency symbol?

How would you use the filter function to get all tasks from a to-do list that are overdue and assigned to a specific user?

Using map, how can you convert an array of dates into an array of formatted date strings (e.g., "MM/DD/YYYY")?

How can you use the reduce function to compute the average score from an array of student scores?

Given an array of user profiles with age, how would you use filter to find users within a certain age range?

Advanced Questions
How would you use map and reduce to create a summary report from an array of sales transactions, including total sales per product?

Given a nested array of categories and items, how can you use flatMap (or equivalent) to create a single array of all items?

How would you use filter and reduce to get the total number of items in stock for each category in an inventory system?

How can you use map, filter, and reduce to implement a function that calculates the total revenue and the average revenue per product type from a sales data array?

Given an array of user data with timestamps, how would you use map and filter to get the most recent interactions for each user?

These questions should help explore practical use cases for map, filter, and reduce in real-world scenarios.

*/


// q1


// q2
let arr2 = ["Abhi", "Anku", "Whaatever"];
let newarr2 = arr2.map((element) => { return element.toUpperCase();})
console.log(newarr2);

// q3
let obj2 = {
    p1: {
        name: "Abhishek",
        isActive: true,
    },
    p2: {
        name: "Anku",
        isActive: false,
    },
    p3: {
        name: "Ankush",
        isActive: false,
    },
    p4: {
        name: "Ankur",
        isActive: true,
    },
};

Object.keys(obj2).forEach(key => {
    if (obj2[key].isActive) {
        console.log(obj2[key].name);
    }
});



// intermediate

// q1
const orders = [
    { amount: 1500, status: 'completed' },
    { amount: 2000, status: 'pending' },
    { amount: 3500, status: 'completed' },
    { amount: 1200, status: 'canceled' },
    { amount: 2300, status: 'completed' }
];

let total = orders
    .filter(order => order.status === 'completed')
    .reduce((acc, order) => {
        return acc + order.amount;
    }, 0);

let totalWithCurrency = `$${total}`;

console.log(totalWithCurrency); // Output: $7300


// q2
const tasks = [
    { title: 'Task 1', dueDate: '2024-07-25', assignedTo: 'John', status: 'overdue' },
    { title: 'Task 2', dueDate: '2024-08-01', assignedTo: 'Jane', status: 'in progress' },
    { title: 'Task 3', dueDate: '2024-07-20', assignedTo: 'John', status: 'overdue' },
    { title: 'Task 4', dueDate: '2024-07-27', assignedTo: 'Jane', status: 'completed' },
    { title: 'Task 5', dueDate: '2024-07-19', assignedTo: 'John', status: 'overdue' }
];


const specificUser = 'John';

const overdueTasksForUser = tasks.filter(task => task.status === 'overdue' && task.assignedTo === specificUser);

console.log(overdueTasksForUser);


// q4 
const studentScores = [85, 90, 78, 92, 88];

let totalScore = studentScores.reduce((acc, curr) => acc + curr, 0);
let avgScore = totalScore / studentScores.length;

console.log(avgScore);



//q1
const inventory = [
  { category: 'Electronics', item: 'Laptop', inStock: 4 },
  { category: 'Electronics', item: 'Phone', inStock: 10 },
  { category: 'Electronics', item: 'Tablet', inStock: 5 },
  { category: 'Furniture', item: 'Chair', inStock: 20 },
  { category: 'Furniture', item: 'Table', inStock: 15 },
  { category: 'Clothing', item: 'T-Shirt', inStock: 50 },
  { category: 'Clothing', item: 'Jeans', inStock: 30 },
  { category: 'Clothing', item: 'Jacket', inStock: 10 },
];


const summaryReport = inventory.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = 0;
    }
    acc[curr.category] += curr.inStock;
    return acc;
  }, {});
  
  console.log(summaryReport);
  // Output: { Electronics: 19, Furniture: 35, Clothing: 90 }
  

  const salesData = [
    { product: 'Laptop', revenue: 1200 },
    { product: 'Phone', revenue: 800 },
    { product: 'Tablet', revenue: 600 },
    { product: 'Laptop', revenue: 1500 },
    { product: 'Phone', revenue: 700 },
    { product: 'Laptop', revenue: 1300 },
    { product: 'Tablet', revenue: 400 },
  ];

const summaryReport1 = salesData.reduce((acc,curr)=>{
    if(!acc[curr.product]){
        acc[curr.product] = 0;
    }
    acc[curr.product] += curr.revenue;
    return acc;
},{})

console.log(summaryReport1);