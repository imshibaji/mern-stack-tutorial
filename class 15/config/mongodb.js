const mongoose = require('mongoose');

main().then(()=> console.log('Database Connected...')).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/bangladesh');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

module.exports = mongoose;