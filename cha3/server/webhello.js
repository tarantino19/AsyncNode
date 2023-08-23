#!/usr/bin/env node
const port = process.argv[2] || process.env.PORT || 3000,
	http = require("http");
http
	.createServer((req, res) => {
		console.log(req.url);
		const nameArg = capitalize(
			req.url
				.replace(/[^\w.,-]/g, " ")
				.replace(/\s+/g, " ")
				.trim() || "world"
		);
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html");
		res.end(`<p>Hello ${nameArg}!</p>`);
	})
	.listen(port);
console.log(`Server running at http://localhost:${port}/`);

// capitalize the first letter of all words
function capitalize(str) {
	return str
		.trim()
		.toLowerCase()
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

// If a single user triggers a long-running JavaScript function that takes ten seconds to complete, every user accessing at that time will be waiting at least ten seconds for a response. Asynchronous code solves the problem, but it takes time to understand the concepts.

// In essence, avoid storing application or user state in variables or local ?les that could differ across instances. Use a database to retain state so every instance of the application can be synchronized.

//

// C C B A D

// 1. Which of the following statements is true:
// a. Node.js can only run web apps.
// b. Node.js web apps require web server software such as NGINX to run. c. Node.js web apps don’t require web server software, but NGINX or similar can be beneficial on production sites.
// d. Node.js isn’t suitable for running production web applications.
// 2. Which steps are necessary after modifying a Node.js app?
// a. Use a tool such as nodemon to monitor for changes and restart the application.
// b. If it’s already running, stop the application with Ctrl | Cmd + C and restart it.
// c. Close the terminal, open a new one, and start the application again.
// d. Any of the above.
// 3. Which Node.js object property returns command line arguments?
// a. process.arg
// b. process.argv
// c. process.argument d. process.env
// 4. Which Node.js object property returns environment variables?
// a. process.env
// b. process.envv
// c. process.environment d. process.arg
// 5. Can you launch multiple instances of the same Node.js app to improve resilience and performance?

// 37
// Node.js: Novice to Ninja
// No. Only a single instance of a Node.js app can be launched at a time.
// Yes, but each instance must be on a separate real or virtual server.
// Yes, but containerization software such as Docker is essential.
// Yes, but the application should be stateless and receive requests via a load balancer or web server.
// //
