const app = require('./app');
const connectDatabase = require('./config/database');
require('dotenv').config();

// Connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
	console.log(`Server started on PORT: ${process.env.PORT} `);
});

// // Handle unhaldled Promise rejection
// process.on('unhandledRejection', err => {
// 	console.log(`ERROR: ${err.message}`);
// 	console.log('Shuting down the server due to Unhandled Promise rejection');
// 	server.close(() => {
// 		process.exit(1);
// 	});
// });
