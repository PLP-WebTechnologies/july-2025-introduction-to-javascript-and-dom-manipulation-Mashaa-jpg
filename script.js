// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // ===========================================
    // ❤️ Part 1: Mastering JavaScript Basics
    // ===========================================
    console.log("--- Part 1: JavaScript Basics ---");

    // Variable Declarations and Data Types
    let name = "Guest";
    const currentYear = 2024;
    let isLearning = true;
    let learningTopic = null;

    // Simple Conditional Logic (if/else)
    if (isLearning) {
        learningTopic = "JavaScript";
        console.log(`Hello, ${name}! You are currently learning ${learningTopic}.`);
    } else {
        console.log("Welcome back! What would you like to learn today?");
    }

    // ===========================================
    // ❤️ Part 2: JavaScript Functions
    // ===========================================
    console.log("\n--- Part 2: JavaScript Functions ---");

    /**
     * Function 1: Greet a user and display a message on the page.
     * @param {string} userName The name to greet.
     */
    function greetUser(userName) {
        const greetingElement = document.getElementById('greetingOutput');
        if (userName) {
            greetingElement.textContent = `Hello, ${userName}! Welcome to your JavaScript project.`;
        } else {
            greetingElement.textContent = "Please enter your name.";
        }
    }

    /**
     * Function 2: Calculate the sum of an array of numbers.
     * @param {number[]} numbers An array of numbers.
     * @returns {number} The total sum of the numbers.
     */
    function calculateSum(numbers) {
        let sum = 0;
        // Using a forEach loop for this one (also Part 3)
        numbers.forEach(number => {
            sum += number;
        });
        return sum;
    }

    // Example of using the calculateSum function
    const numbers = [10, 20, 5, 15];
    const total = calculateSum(numbers);
    console.log(`The sum of [${numbers.join(', ')}] is ${total}.`);

    // Event listener for the "Greet Me!" button
    const greetBtn = document.getElementById('greetBtn');
    const nameInput = document.getElementById('nameInput');
    greetBtn.addEventListener('click', () => {
        greetUser(nameInput.value);
    });


    // ===========================================
    // 🔁 Part 3: JavaScript Loops
    // ===========================================
    console.log("\n--- Part 3: JavaScript Loops ---");

    /**
     * Example 1: Use a for loop to count down.
     */
    console.log("Countdown:");
    for (let i = 5; i > 0; i--) {
        console.log(`${i}...`);
    }
    console.log("Blast off!");

    /**
     * Example 2: Use a for loop to generate a list of items and add them to the DOM.
     */
    const generateListBtn = document.getElementById('generateListBtn');
    const itemList = document.getElementById('itemList');
    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

    generateListBtn.addEventListener('click', () => {
        // Clear the list before generating new items
        itemList.innerHTML = '';
        console.log("Generating a list of items using a for loop.");
        for (let i = 0; i < items.length; i++) {
            const li = document.createElement('li');
            li.textContent = items[i];
            li.className = "p-2 my-2 bg-gray-600 rounded-md hover:bg-gray-500 transition-colors duration-200";
            itemList.appendChild(li);
        }
    });


    // ===========================================
    // 🌐 Part 4: Mastering the DOM with JavaScript
    // ===========================================
    console.log("\n--- Part 4: DOM Manipulation ---");

    // DOM Interaction 1: Change Text
    const domTextElement = document.getElementById('domText');
    const changeTextBtn = document.getElementById('changeTextBtn');
    changeTextBtn.addEventListener('click', () => {
        domTextElement.textContent = "The text has been changed! This is a DOM interaction.";
        console.log("DOM Interaction 1: Text content changed.");
    });

    // DOM Interaction 2: Toggle a Class
    const toggleClassBtn = document.getElementById('toggleClassBtn');
    toggleClassBtn.addEventListener('click', () => {
        // Toggle the 'bg-blue-600' class to demonstrate adding/removing a class
        domTextElement.classList.toggle('bg-blue-600');
        domTextElement.classList.toggle('p-2');
        domTextElement.classList.toggle('rounded-lg');
        domTextElement.classList.toggle('font-bold');
        console.log("DOM Interaction 2: Class has been toggled.");
    });

    // DOM Interaction 3: Creating and Appending Elements (demonstrated in Part 3 loop)
    // The `generateListBtn` event listener demonstrates creating `<li>` elements
    // and appending them to the `<ul>` element.

});
