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

**Solution**: [03_solution](./workbook/03_solution)

### 04 `npm install` and `npmjs.com`
**Challenge**:
- Go to the website https://npmjs.com
- Search "metal name"
- Click on a library called "metal-name"
- Take some time to look at the usage instructions, and to look at the project on GitHub
- Go back and search "food words"
- Click on a library called "food-words"
- Install both of these libraries locally by running `npm install <library-name>`
- Notice that this creates a folder called `node_modules` and a file called `package-lock.json`
- Write a script that combines these two libraries in a fun way.

**Solution**: [04_solution](./workbook/04_solution)

### 05 `npm init`, `.gitignore`, `npm install --save`
**Challenge**:
- Copy all of the files from Challenge 04 into a new folder for Challenge 05.
- run `npm init` within from within that folder.
- fill in all of the information (what is in parenthesis is the default value)
- open the file that was just created, `package.json` and take a look at the contents
- run `npm install --save metal-name`
- run `npm install --save food-words`
- look again at the contents of `package.json`, do you notice anything different?
- open the folder in finder by running `open .`
- drag the folder `node_modules` to the Trash
- try running `node bandNameGenerator.js`. what happens? (it doesn't work, right?)
- run `npm install` and then try running `node bandNameGenerator.js`. what happens? (it works, right? and the `node_modules/` folder is back)
- turn the project into a git repository by running `git init`
- try running `git add .`, then `git status`. what happens? (all of the files in node_modules are staged for commit, right?)
- create a file called `.gitignore`, and add a line that simply says `node_modules`
- try running `git reset .`, then `git add .`, then `git status`. what happens? (the node_modules folder is no longer staged for commit, but *ignored*)
- commit your changes using `git commit -m "initial commit"`

### 06 Using multiple JS files

1.  Using a Node core library, advanced
2.  Using multiple JS files with `module.exports`/`export`
3.  `express` static server
4.  `express` routes returning HTML
5.  `express` routes returning JSON
6.  Using Postman
7.  Using a JSON object as a data store
8.  Creating a `POST`/Create route
9.  Creating a `PUT`/Update route
10. Creating a `DELETE`/Delete route
11. Using a file-based data store
12. Using other APIs - Getting Around CORS
13. Connecting your API to a client