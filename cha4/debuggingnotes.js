// line numbering to locate where an error occurred
// type checking—for example, to ensure a number variable can’t have a string assigned
// color-coding to catch syntax issues, such as invalid statements or missing quotes
// auto-completion of variable names, function names, properties, etc. bracket matching to highlight problems in nested structures auto-indentation that uses the correct tab or space characters
// variable renaming across files and projects
// snippet saving and reuse
// parameter prompts for functions, properties, and methods
// function navigation to jump to a declaration
// unreachable code detection
// refactoring tools to rearrange messy code

//use es lint, use git to track changes, adopt an issue tracking system
// Does a bug exist if no one knows about it? An issue-tracking system is used to report bugs, find duplicates, document reproduction steps, determine severity, calculate priorities, assign developers, record discussions, and track progress of fixes.
//use test driven development

//https://www.browserstack.com/guide/what-is-test-driven-development
// https://www.sitepoint.com/premium/courses/master-test-driven-development-in-node-js-2932

// Use Test-driven Development
// Test-driven development (TDD) is a development process that encourages developers to write code to test the operation of a function before that function is written—as in is X returned when function Y is passed input Z?
// Tests are run as you develop code to prove the resulting function works as expected. The same test can be rerun to spot issues as further changes are made. Of course, your tests could have bugs too!
// Further resources:
// TDD overview at Wikipedia
// “What is Test Driven Development”
// “Master Test-driven Development in Node.js”

// Environment variables set within the host operating system control Node.js application settings. The most common is NODE_ENV , which is typically set to
// development when debugging or production on a live server. Environment variables can be set on Linux/macOS:
// This is the Windows Command Prompt:
// This is for Windows Powershell:
// Internally, your own application can detect the setting and enable debugging

// NODE_ENV = development; - mac
// set NODE_ENV=development
// $env:NODE_ENV="development"

// running in development mode?
// const DEVMODE = (process.env.NODE_ENV !== 'production');
// if (DEVMODE) {
//   console.log('application started in development mode');
// }
// NODE_DEBUG enables debugging messages using the Node.js util.debuglog . (See the “Node.js util.debuglog ” section below.) You should also consult the documentation of your primary modules and frameworks to discover further logging options.

// FOR DEBUGGING
// Various command-line options can be passed to the node or nodemon runtime when launching an application. One of the most useful is --trace- warnings , which outputs stack traces when promises don’t resolve or reject as expected:

// node --trace-warnings index.js

// --enable-source-maps : enable source maps when using a transpiler such as TypeScript
// --throw-deprecation : throw errors when deprecated features are used
// --inspect : activate the V8 inspector (see the “Node.js V8 Inspector” section below)

// USE CONSOLE LOG
// console.log( myVariable );

//console methods

// https://nodejs.org/api/console.html
//page 46
const student = {
	name: "John",
	age: 20,
	marks: {
		science: 70,
		math: 75,
	},
};

// console.table(student);

// However, ES6 destructuring offers similar output with less typing effort:
// let x = 123;
// let y = `BAHAHAHAH`;
// console.log("x:", x);
// // x: 123
// console.log({ y });
// { x: 123 }

// console.dir(student); //{ name: 'John', age: 20, marks: { science: 70, math: 75 } }

// const util = require("util");
// const debuglog = util.debuglog("myapp");
// debuglog("myapp debug message [%d]", 123);

//use morgan - youtube it
