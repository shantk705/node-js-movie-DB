/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("----------------------------------------");
}
let listedTasks = [
  " ",
  "go to the gym !",
  "take a shower ",
  "practice javascript",
];
/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  let response = text.replace("\n", "!");
  if (text === "quit\n") {
    quit();
  } else if (text === "exit\n") {
    exitApp();
  } else if (text.includes("add")) {
    addTask(text);
  } else if (text.includes("remove")) {
    removeTask(text);
  } else if (text === "help\n") {
    help();
  } else if (text === "hello\n") {
    hello();
  } else if (text.includes("hello ")) {
    console.log(response);
  } else if (text === "list\n") {
    list();
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
  console.log("type *help* to see the list of commands!");
}

/**
 * Says hello
 *@param  {string} c
 * @returns {void}
 */
function hello() {
  console.log("hello!");
}

/**
 * shows the list of commands in the app in case
 * the user writes something unknown
 *
 */
function help() {
  console.log("Commands list :");
  console.log("----------------------------------------------------------------------------------------------------");
  console.log("*extended hello*  --add your name after  the command *hello*");
  console.log("*hello*  -- a simple command to greet the user ");
  console.log("*list*    -- lists all of the available tasks");
  console.log("*add*  -- adds a new task to the list of tasks,name the task after the command to add it on the list");
  console.log("*remove*   -- adds a new task to the list of tasks,use the number of the task to remove it");
  console.log("*quit*/*exit*   -- quits the application ");
 
}

/**
 * lists the tasks saved inside the array
 */
function list() {
  for (let i = 1; i < listedTasks.length; i++) {
    console.log(i + "-" + listedTasks[i]);
  }
}
/**
 * adds new tasks to the list
 * @param x is used to take the input and filter out the task, and save it inside the array
 */
function addTask(x) {
  let removeCommon = x.replace("add ", "");
  let removeSpace = removeCommon.trim();
  if (x.includes("add ")) {
    listedTasks.push(removeSpace);
    console.log(list());
  } else if (x === "add\n") {
    console.log("error, cant add a task without description!!!");
  }
}

/**
 * Removes tasks from the list
 * @param x is used to take the input and filter out the index of the array the user wants to remove 
 */
 function removeTask(x) {
  let filterNumber = x.substr(7,1);
  let i=+filterNumber;
  if (x.includes("remove ")){
    listedTasks.splice(i,1)
    console.log(`removed task number ${i}!!!`)
    console.log(list());
  }else if (x === "remove\n"){
    listedTasks.pop();
    console.log("automatically removed latest task!!!");
    console.log(list());
  }
  
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}
function exitApp() {
  console.log("Exiting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("Shant Kel");
