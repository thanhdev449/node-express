const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/node-express-1', {useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false });
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost/node-express-1',{
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            useFindAndModify: false
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;