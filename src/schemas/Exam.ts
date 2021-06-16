import { ExamInterface } from 'interfaces/exam.interface';
import mongoose, { Document, Schema } from 'mongoose';

type Exam = Document & {};
export interface ExamDocument extends mongoose.Document {
  id: string;
  userId: string;
  isPositive: boolean;
  exam: ExamInterface;
  createdAt: Date;
}

const ExamSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  isPositive: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  exam: {
    type: Object,
    required: true,
  }

});

export default mongoose.model<Exam>('Exam', ExamSchema);