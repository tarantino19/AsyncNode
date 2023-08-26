// /hello/ route
import { Router } from "express";
import { hello } from "../lib/locale.js";
import { goodbye } from "../lib/locale.js";
import { capitalize } from "../lib/string.js";

export const helloRouter = Router();
export const goodbyeRouter = Router();

// say hello in English
helloRouter.get("/:name", (req, res, next) => {
	res.render("message", {
		title: `${hello.en} ${capitalize(req.params.name)}!`,
	});
});

// say hello in a specific language
helloRouter.get("/:lang/:name", (req, res, next) => {
	res.render("message", {
		title: `${hello[req.params.lang] || hello.en} ${capitalize(
			req.params.name
		)}!`,
	});
});

// say goodbye in English
goodbyeRouter.get("/:name", (req, res, next) => {
	res.render("message", {
		title: `${goodbye.en} ${capitalize(req.params.name)}!`,
	});
});

// say goodbye in a specific language
goodbyeRouter.get("/:lang/:name", (req, res, next) => {
	res.render("message", {
		title: `${goodbye[req.params.lang] || goodbye.en} ${capitalize(
			req.params.name
		)}!`,
	});
});
