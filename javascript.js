
const dotenv = require('dotenv');

dotenv.config({ path: './dev' }); 


const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error('MONGO_URI is not defined in environment file');
}