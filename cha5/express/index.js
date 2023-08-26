// Express application
import express from "express";
import compression from "compression";

import { fileURLToPath } from "url";
import { dirname, sep } from "path";

// configuration
const __dirname = dirname(fileURLToPath(import.meta.url)) + sep,
	cfg = {
		port: process.env.PORT || 3000,
		dir: {
			root: __dirname,
			static: __dirname + "static" + sep,
			views: __dirname + "views" + sep,
		},
	};
console.dir(cfg, { depth: null, color: true });

// Express initiation
const app = express();

// use EJS templates
app.set("view engine", "ejs");
app.set("views", cfg.dir.views);

//app.use is for middleware functions
// This example shows a middleware function with no mount path. The function is executed every time the app receives a request.
app.use((req, res, next) => {
	console.log("Time:", Date.now());
	next();
});

// HTTP compression
// To improve web application performance, you should compress assets before they’re returned to the browser over the network - npm install compression
app.use(compression());

// do not identify Express
// It will save a few bytes on every HTTP request, and will also give malicious hackers less information about your Node.js technology stack.
app.disable("x-powered-by");

// log every request to the terminal
app.use((req, res, next) => {
	console.log(req.url);
	next();
});
//You should place this function before any others that could end processing. No logging would occur if you placed it after URL routing or static asset middleware that succeeded in returning a response.

// home page route
app.get("/", (req, res) => {
	res.send("Hello World!");
});

// another route
app.get("/hello/", (req, res) => {
	res.send("Hello again!");
});

// configuration for the port
// const cfg = {
// 	port: process.env.PORT || 3000,
// };

// start server
app.listen(cfg.port, () => {
	console.log(`Example app listening at http://localhost:${cfg.port}`);
	console.log(`You made a change...`);
});

// export defaults
export { cfg, app };

// Other modules can’t access the cfg object unless you export it. The active app object can also be useful, so add the following code at the end of index.js :

// serve static assets
app.use(express.static(cfg.dir.static));
// app.use(express.static("static"));

// 404 error = this needs to be in the last part after the routes
app.use((req, res) => {
	res.status(404).send("Sorrehh, this page does not exist... yet");
});

//middleware

// run code on every request
// manipulate or change the request and response objects
// terminate a response—perhaps if the user isn’t logged in
// call the next middleware function

// All middleware functions receive three arguments:
// req : the Express HTTP Request object.
// res : the Express HTTP Response object.
// next : a callback that passes control to the next middleware function.
// Middleware functions must always call next() unless they complete or terminate the current request.
