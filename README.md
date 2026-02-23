Qus 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans : getElementById: Selects a single element by its unique ID. It returns only one element.

Example:

const element = document.getElementById("myId");
getElementsByClassName: Selects all elements with a specified class name. It returns a live HTMLCollection (updates automatically if elements are added/removed).

Example:

const elements = document.getElementsByClassName("myClass");

querySelector: Selects the first element that matches a CSS selector.

Example:

const element = document.querySelector(".myClass");

querySelectorAll: Selects all elements that match a CSS selector and returns a static NodeList (doesn't automatically update).

Example:

const elements = document.querySelectorAll(".myClass");



Qus 2. How do you create and insert a new element into the DOM?

Ans: Create a new element:

const newElement = document.createElement("div");

Set content or attributes:

newElement.textContent = "Hello, World!";
newElement.classList.add("new-class");

Insert the element into the DOM:

const parentElement = document.getElementById("parentElementID");
parentElement.appendChild(newElement);

Qus 3. What is Event Bubbling? And how does it work?

Ans: Event Bubbling is when an event triggered on an element (e.g., a button) bubbles up to its parent elements. It starts from the target element and moves up to the root of the document.

Example: If you click a button inside a div, the event first triggers on the button, then on the div, and then on the body, and so on.
Qus 4. What is Event Delegation in JavaScript? Why is it useful?

Ans :Event Delegation is when you attach a single event listener to a parent element instead of adding one to each child element. The event listener can then handle events for all current and future child elements.

Why it's useful:

It improves performance because you don’t need to add a listener to each child element.

It works for dynamically added elements.

Qus 5. What is the difference between preventDefault() and stopPropagation() methods?


Ans: Prevents the default behavior of an event (e.g., stopping a form from submitting or a link from navigating).# B13-A4-PH-Job-Tracker-Assingment-By-Sani
