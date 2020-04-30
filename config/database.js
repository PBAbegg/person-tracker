const mongoose = require('mongoose');

const dbUri = require('./settings').DBURI;
const dbOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
};

module.exports = () => {
    mongoose.connect(dbUri, dbOptions);
    
    mongoose.connection.on('connected',  () => {
        console.log('Successfully connected');
    });

    mongoose.connection.on('error' ,(err) => {
        console.log('connection error', err);
    });
    
    mongoose.connection.on('disconnected', () => {
        console.log('disconnection');
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('closing MongoDB connection');
            process.exit();
        });
    });
}