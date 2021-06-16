import moongose from 'mongoose';
import Exam from '../../src/schemas/Exam';
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

describe('Import', () => {
  beforeAll(async () => {
    if (!process.env.MONG_URL) {
      throw new Error('MongoDB server not initialized');
    }

    await moongose.connect(process.env.MONG_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
  });

  afterAll(async () => {
    await moongose.connection.close();
  });

  beforeEach(async () => {
    await Exam.deleteMany({});
  });

  it('should be able to import new results', async () => {
    await Exam.create({ userId: 'andson', isPositive: true, createdAt: new Date(), exam: {} });

    const list = await Exam.find({});

    expect(list.length).toBeGreaterThan(0);

  });
});