/*

WHY NODEJS?

1 - fast - asynchronous - non-blocking 
2  - real time - web sockets , server sent events
3 - lightweight - small and cross platform
4 - modular 
5 - extendible - . You’ll find pre-written code for task runners, loggers, database connectors, image processors, code compilers, web servers, API managers, and even client-side libraries.
The npm command-line tool is provided with Node.js and makes it easy to install, update, and remove modules. You can also use it to install global modules so Node.js scripts can run as commands from anywhere on your system.
6 - open source - free - updated by the community
7 - everywhere - 


How to Install Node.js on macOS
Open the nodejs.org home page in your browser and you’ll be directed to download the Node.js .pkg installer for macOS. Launch the file, agree to the terms, and continue the installation.
Verify that Node.js and npm are installed correctly by running the following commands in the terminal to view their version numbers:
  
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
 nano ~/.bashrc
export NPM_GLOBAL="$HOME/.npm-global"
export PATH="$NPM_GLOBAL/bin:$PATH"
 npm install npm --global
 
Install Node.js 14
 node -v npm -v
How to Install Node.js on Windows
You can perform a Windows installation of Node.js in three ways:
on Windows directly
on a Linux distro installed in WSL2 (refer to the “How to Install Node.js on Linux (or Windows WSL2)” section above)
on both Windows and Linux!
To install on Windows, open the nodejs.org home page in your browser and you’ll be directed to download the Node.js .msi installer. Launch the file, agree to the terms, and continue the installation.
Verify that Node.js and npm are installed correctly by running the following commands in the terminal to view their version numbers:
How to Install Node.js on Other Devices
If you’re using another device, chances are you’ll find a Node.js distribution somewhere. It may not be on the standard nodejs.org website, so try Googling “install Node.js on [my-device’s-name]”.
For example, searching for “Install Node.js on Raspberry Pi” provides many resources for installing Node.js on different editions of the hardware.
Run JavaScript Commands in the Node.js REPL
Node.js provides a read-evaluate-print loop (REPL) language environment. It
      node -v npm -v
   
15 Node.js: Novice to Ninja
will be familiar if you’ve ever opened a browser’s developer tools console, and it’s useful for testing snippets of code.
Start the REPL from your terminal by entering node . You’ll see a prompt such as this:
Enter a JavaScript command or expression at the > prompt. For example:
(Replace “World” with your own name in quotes.)
You’ll see undefined returned, because the expression doesn’t output anything. Now enter the following, to see “Hello World” (or whatever name you used):
Again, undefined is shown because console.log() outputs a string and doesn’t return a value.
You can enter any JavaScript expression. It’s not necessary to wrap it in a console.log() . For example:
  Welcome to Node.js v16.12.0.
Type ".help" for more information.
>
 > const myname = 'World';
  > console.log(`Hello ${ myname }`);
    $ node
Welcome to Node.js v16.12.0.
Type ".help" for more information.
> 2+2
4
> const myname = 'World'
undefined
> `Hello ${ myname }`

Install Node.js 16
'Hello World'
>
Finally, press Ctrl | Cmd + D to exit the REPL console.
You’re unlikely to use the REPL environment on a daily basis, but it can be
useful for evaluating simple expressions before adding them to a script.
Summary
In this chapter, you’ve learned how to install Node.js on a variety of devices and run JavaScript commands in the REPL console. I've summarized it in this chapter's video. In the next chapter, you’ll write your first JavaScript-powered console and web applications.

QUIZ

ASNWERS:  ADBCA
1. What is Node.js?
a. A JavaScript runtime.
b. A tool for creating command-line, GUI, and web applications. c. A cross-platform programming framework.
d. All of the above.
2. What is JavaScript’s relationship to Java?
a. JavaScript is a cut-down version of Java.
b. JavaScript is a cross-platform version of Java. c. JavaScript is Java that runs in a web browser. d. JavaScript is a marketing name.
3. What is not another name for JavaScript?
a. ECMAScript b. TypeScript c. JScript
d. ES2015
4. What best describes the Node.js non-blocking, event-driven I/O?
              
What is Node.js? 8
a. Code that runs in separate processing threads.
b. Code that runs synchronously; the next command runs after the current command has completed.
c. Code that runs asynchronously; the next command could run before the current command has completed.
d. Code that runs in parallel with other processes.
5. What is npm short for?
a. Node Package Manager
b. Node Program Maintenance c. Node Parsing Methods
d. Node.js Perfect Manual


ANSWERS DBA

Quiz
1. Versions of Node.js are available for:
a. most Linux distributions b. macOS
c. Microsoft Windows
d. all of the above
2. What is nvm used for?
a. It’s an alternative to the standard npm.
b. It can install and manage different versions of Node.js on one device. c. It’s a module search system.
d. It’s a text editor specifically designed for JavaScript applications.
3. What is REPL short for?
a. read-evaluate-print loop b. read-execute-print loop c. run-evaluate-print loop
             
17 Node.js: Novice to Ninja
d. read-execute-primary loop

*/
