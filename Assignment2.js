JS Assignment 2

Solve the questions given here -

1. Write code to display from 1 to 100 but just even numbers.
Sol :

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
Sol :

function calculator(operation, num1, num2) {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation";
    }
    return result;
}

// Example :
console.log(calculator('add', 5, 3)); // Output: 8
console.log(calculator('subtract', 7, 2)); // Output: 5
console.log(calculator('multiply', 4, 6)); // Output: 24
console.log(calculator('divide', 10, 2)); // Output: 5



3.You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

if 500000 >= salary > 0 then 0% tax on the entire salary.
If 1000000 >= salary > 500000 then 10% tax on the entire salary.
If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
If the salary > 1500000 then 30% tax on the entire salary.
Sol :

function findTax(salary) {
    let taxRate;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.2;
            break;
        case (salary > 1500000):
            taxRate = 0.3;
            break;
        default:
            taxRate = "Invalid salary";
    }
    return salary * taxRate;
}

// Example :
console.log(findTax(400000)); // Output: 0
console.log(findTax(700000)); // Output: 70000
console.log(findTax(1200000)); // Output: 240000
console.log(findTax(2000000)); // Output: 600000

4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.
Sol :

function sumOfProducts(n1, n2) {
    let sum = 0;
    while (n1 > 0 || n2 > 0) {
        sum += (n1 % 10) * (n2 % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }
    return sum;
}

// Example :
console.log(sumOfProducts(6, 34)); // Output: 24