// tslint:disable:no-console
import mongoose from 'mongoose';

const { log } = console;

async function connection() {
  log('Trying connection with MongoDB');

  await mongoose.connect('mongodb://localhost:17017/locality', {
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
