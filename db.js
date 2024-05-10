const mongoose = require('mongoose');
const dbHOST = process.env.DBHOST;

mongoose.connect(dbHOST);

module.exports = mongoose