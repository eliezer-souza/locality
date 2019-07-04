// tslint:disable:no-console
import mongoose from 'mongoose';

const { log } = console;

async function connection() {
  log('Trying connection with MongoDB');

  await mongoose.connect(`${process.env.MONGO_DATABASE_URL}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
  });
}

mongoose.connection.on('error', err => {
  log(`MongoDB connection error: ${err}`);
  setTimeout(connection, 5000);
});

mongoose.connection.on('connected', () => {
  log('MongoDB is connected');
});

export default async function connectionDatabase() {
  await connection();
}
