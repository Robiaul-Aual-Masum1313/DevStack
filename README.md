# Dev Stack Website To Choose Your Stack

## About My Project 

A simple and user-friendly project that helps you choose and organize the development stack for your next project. Easily add the technologies you want to use, remove one or multiple stacks, and rearrange them to create your desired development stack.

## 🛠️ Technologies Used

  - React.js
  - Tailwind CSS
  - TypeScript (ES6+)
  - React-Toastify (NPM Package)
  - JSON (for technology data)
  - Vite (build tool)

## ✨ Features

1. Easily add your desired development stacks.
2. Remove any stack if you change your mind.
3. Remove all selected stacks at once to start from scratch.
4. Get clear and easy-to-understand notifications when adding or removing stacks.


## ❓ Frequently Asked Questions

1. What is JSX, and why is it used in React?
  => JXS stand for javascript XML . we use it to combine HTML and Javascript

2. What is the difference between props and state?
 =>  **State** is basically like a variable that stores data within a component and can change over time.

    **Props** are similar to function arguments. They allow us to pass data from a parent component to a child component.

3. What does the useState hook do, and where did you use it in this project?
  => we use useState hook to manage State. i use this hook to manage stats in 3 defferent places like to store selected stacks , remove stacks , remove all stacks.
4. What does the useEffect hook do, and why did you need it to load the JSON data?
  =>we use useEffect hook to run a pice of code depending on a state or only one time . we use it to load json data because we don't want to load the json data every time the component renders.
5. Why does every item in a .map() list need a unique key prop?
  => react use vertual dom before updating the actule DOM . in vertual DOM to identyfy what changed in a pacific element, reacet need a identyfire to identyfy that element. that's why a unique key prop is required.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
  => conditional rendering means, render something depending on a condition. i use it to show a empty message when the stack is empty, and show the stocks when stacks exist.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
  => using props, we sent data to child. To pass data to parent we use a callback function . we pass a function reference to child using props and child call that function and pass data to parent using that function.

