const mongoose = require('mongoose');

const connectDatabase = () => {
	mongoose.connect(process.env.MONGO_URL, () => console.log('DB is connected'));
};

module.exports = connectDatabase;
