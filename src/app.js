const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

//  SAY HELLO
app.get('/hello', (req, res) => {
	console.log(req.query);
	const name = req.query.name;
	const content = name ? `Hello, ${name}!` : 'Hello!';
	res.send(content);
});

// SAY GOODBYE
app.get('/say/goodbye', (req, res) => {
	res.send('Sorry to see you go!');
});

// SAY SOMETHING
app.get('/say/:greeting', (req, res) => {
	const greeting = req.params.greeting;
	const name = req.query.name;

	const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
	res.send(content);
});

// SONG TITLE
app.get('/songs', (req, res) => {
	const title = req.query.title;
	res.send(title);
});

// NOT FOUND ROUTE HANDLER
app.use((req, res, next) => {
	res.send(`The route ${req.path} does not exist!`);
});

module.exports = app;
