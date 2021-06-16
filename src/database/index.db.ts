import mongoose from 'mongoose';

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});
//mongodb + srv://snyivia-test:<test123snyvia>@cluster0.jktwc.mongodb.net/exams?retryWrites=true&w=majority"
//mongodb://localhost/results

if (!process.env.MONG_URL) {
  throw new Error('MongoDB server not initialized');
}

mongoose.connect(process.env.MONG_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;

export default mongoose;
