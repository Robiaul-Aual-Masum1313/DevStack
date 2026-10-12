# 💻 Dev Stack — Choose Your Development Stack

**Dev Stack** is a simple and user-friendly web application that helps developers choose, organize, and manage the technologies they want to use for their next project. Easily add your preferred technologies, remove individual or multiple selections, and build a development stack that fits your project needs.

🔗 **Live Demo:** [Explore Dev Stack](https://devstack-masum.netlify.app/)



## 📖 About the Project

Choosing the right technologies is an important part of starting a development project. Dev Stack provides a simple interface for organizing your preferred tools and technologies in one place.

Whether you're planning a frontend application or exploring technologies for your next project, Dev Stack makes it easy to build and manage your desired development stack.

## ✨ Features

* **➕ Add Technologies** — Easily add your desired technologies to your selected development stack.
* **➖ Remove Individual Stacks** — Remove any technology from your selection whenever your requirements change.
* **🗑️ Clear All Selections** — Remove all selected technologies at once and start building a new stack.
* **🔔 Instant Notifications** — Receive clear feedback when adding or removing technologies.
* **🧩 Flexible Stack Management** — Organize your technology choices according to your project requirements.
* **⚡ Simple User Interface** — Enjoy a straightforward experience for selecting and managing development technologies.

## 🛠️ Technologies Used

| Technology                                                  | Purpose                                             |
| ----------------------------------------------------------- | --------------------------------------------------- |
| [React.js](https://react.dev/)                              | Building reusable UI components                     |
| [TypeScript](https://www.typescriptlang.org/)               | Adding static typing and improving code reliability |
| [Tailwind CSS](https://tailwindcss.com/)                    | Styling and creating responsive layouts             |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Displaying notifications for user actions           |
| JSON                                                        | Storing and organizing technology data              |
| [Vite](https://vite.dev/)                                   | Development server and build tooling                |

## 📦 Dependencies

The main runtime dependencies include:

* **react** — Core React library.
* **react-dom** — Rendering React components in the browser.
* **react-toastify** — Toast notifications for user feedback.

The project may also use the following development dependencies:

* **vite** — Development server and production bundler.
* **typescript** — TypeScript compiler and type checking.
* **tailwindcss** — Utility-first CSS framework.
* **@vitejs/plugin-react** — React integration for Vite.
* **eslint** — Code quality and linting.

> **Note:** The exact dependencies and versions depend on your project configuration. Check `package.json` for the complete list of installed packages.

## 🚀 Getting Started

Follow these instructions to run Dev Stack locally.

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm (included with Node.js) or another compatible package manager
* [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd YOUR_PROJECT_FOLDER
```

Replace `YOUR_PROJECT_FOLDER` with the name of your cloned project directory.

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Vite will display the local URL in your terminal. Open that URL in your browser to use the application.

The default Vite development URL is usually:

http://localhost:5173

### 5. Build for Production

To create an optimized production build, run:

```bash
npm run build
```

### 6. Preview the Production Build

To preview the generated production build locally, run:

```bash
npm run preview
```

## 📜 Available Scripts

These are common Vite project scripts. Confirm the exact scripts in your `package.json`.

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the Vite development server    |
| `npm run build`   | Builds the application for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint`    | Runs ESLint, if configured            |


## 👨‍💻 Author

**Robiaul Aual Masum**

* GitHub: [My Github Link](https://github.com/Robiaul-Aual-Masum1313)


## 📄 License

Choose a license that matches how you want others to use your project. If you intend to distribute it under the MIT License, add an MIT `LICENSE` file to your repository.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS.**




<!-- # Dev Stack Website To Choose Your Stack

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

1. ### What is JSX, and why is it used in React?

  => JXS stand for javascript XML . we use it to combine HTML and Javascript

2. ### What is the difference between props and state?

 =>  State is basically like a variable that stores data within a component and can change over time.
    Props are similar to function arguments. They allow us to pass data from a parent component to a child component.

3. ### What does the useState hook do, and where did you use it in this project?

  => we use useState hook to manage State. i use this hook to manage stats in 3 defferent places like to store selected stacks , remove stacks , remove all stacks.

4. ### What does the useEffect hook do, and why did you need it to load the JSON data?

  =>we use useEffect hook to run a pice of code depending on a state or only one time . we use it to load json data because we don't want to load the json data every time the component renders.

5. ### Why does every item in a .map() list need a unique key prop?

  => react use vertual dom before updating the actule DOM . in vertual DOM to identyfy what changed in a pacific element, reacet need a identyfire to identyfy that element. that's why a unique key prop is required.


6. ### What is conditional rendering? Show one place you used it (example: the empty stack message).

  => conditional rendering means, render something depending on a condition. i use it to show a empty message when the stack is empty, and show the stocks when stacks exist.

7. ### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

  => Using props, we sent data to child. To pass data to parent we use a callback function . we pass a function reference to child using props and child call that function and pass data to parent using that function.
 -->
