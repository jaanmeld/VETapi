import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config(); // gets .env file from root

const { MONGO_URL, MONGO_DB_NAME } = process.env;

const configDb = { dbName: MONGO_DB_NAME };

try {
  await mongoose.connect(MONGO_URL, configDb);
  console.log('Connected to Atlas');
} catch (e) {
  console.error('smth wrong');
}

// console.log('database.js');
