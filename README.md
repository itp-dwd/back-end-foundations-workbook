# Back End Foundations Workbook

This workbook accompanies [Week 4 of the DWD class](https://github.com/itp-dwd/2020-spring/blob/master/weeks/04_back-end-foundations.md), and covers the main points in the [Week 4 slides](https://docs.google.com/presentation/d/1jE6lTeUDnePIjwSl2h4lP3K0glPqUfMDSr_HKdaNGm0/edit?usp=sharing).

## Overview

### 00 Instal Node
**Challenge**:
- Follow the [Installing Node.js guide](https://github.com/itp-dwd/2020-spring/blob/master/guides/installing-nodejs.md).
- Install `nvm` on your computer
- Install the LTS (Long term stable) version of Node
- Set the LTS version of Node to your default version
- Check the installed version by running `nvm version`

![nvm version command](./assets/nvm.png)

### 01 Run JavaScript from the Node REPL
**Challenge**:
-  Start the Node REPL by running `node` on the command line
-  Create a variable called `greeting`, and assign it to "Hello DWD!"
-  Inspect the value of `greeting` using console.log
-  Create a function called `greet` that takes a name as an argument, and returns a String "Hello, <name>!"
-  Call `greet` with the argument "Cassie"
-  exit the REPL by inputting `.exit`
  
**Solution**: [01_solution](./workbook/01_solution.png)

### 02 Creating and running a Node script
**Challenge**:
- `cd` to a folder to hold work for this workbook, e.g. `back-end-foundations-workbook-solutions`
- Create a file called `main.js`
- Write any code you want that uses `console.log`
- Save the file
- Execute the code by running `node main.js`, and you should see the console output in the command line

**Solution**: [02_solution](./workbook/02_solution)

### 03 Using Node core libraries
**Challenge**:
- Create a file called `pizzaToppings.json`.
- Copy the contents this [Pizza Toppings JSON](https://raw.githubusercontent.com/dariusk/corpora/master/data/foods/pizzaToppings.json) file to `pizzaToppings.json`.
- Create a file called `pizzaGenerator.js`.
- Import the `fs` (File System) core library. 
- Import the contents of the file into your JS using `readFileSync`.
- Parse the contents of the file as JSON.
- Use the topping choices to generate a random pizza.
- Output your random pizza as a string using `console.log`
- Run your script from the command line and generate a few random pizzas.



1.  Using a Node core library, advanced
2.  Using multiple JS files with `module.exports`/`export`
3.  `npm` and npmjs.org
4.  `npm init`
5.  `npm install` and `.gitignore`
6.  `express` static server
7.  `express` routes returning HTML
8.  `express` routes returning JSON
9.  Using Postman
10. Using a JSON object as a data store
11. Creating a `POST`/Create route
12. Creating a `PUT`/Update route
13. Creating a `DELETE`/Delete route
14. Using a file-based data store
15. Using other APIs - Getting Around CORS
16. Connecting your API to a client