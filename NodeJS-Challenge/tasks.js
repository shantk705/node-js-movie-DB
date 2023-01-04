
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
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


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
  let response = text.replace("\n","!")
  if (text === 'quit\n') {
    quit();
  }
  else if(text === 'exit\n'){
    exitApp();
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text === 'hello\n'){
    hello();
  }
  
  else if(text.includes("hello ")){
    console.log(response)
  }
  else{
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
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
  console.log('type *help* to see the list of commands!')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!');
 
  
  
}


/** 
 * shows the list of commands in the app in case 
 * the user writes something unknown 
 */
function help(){
  console.log('commands list :');
  console.log("--------------------")
  console.log('*hello*');
  console.log('*quit*');
  console.log('*exit*');
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
function exitApp(){
  console.log('Exiting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("shant Kel")
