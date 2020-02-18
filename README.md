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

1.  Using a Node core library
2.  Using a Node core library, advanced
3.  Using multiple JS files with `module.exports`/`export`
4.  `npm` and npmjs.org
5.  `npm init`
6.  `npm install` and `.gitignore`
7.  `express` static server
8.  `express` routes returning HTML
9.  `express` routes returning JSON
10. Using Postman
11. Using a JSON object as a data store
12. Creating a `POST`/Create route
13. Creating a `PUT`/Update route
14. Creating a `DELETE`/Delete route
15. Using a file-based data store
16. Using other APIs - Getting Around CORS
17. Connecting your API to a client