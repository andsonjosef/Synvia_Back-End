
import { Router } from 'express';
import Exam, { ExamDocument } from '../../src/schemas/Exam';

import authMiddleware from '../middlewares/auth.middleware';
import { ExamInterface } from 'interfaces/exam.interface';
import { exameScore } from '../consts/exame-score.const'
const examsRouter = Router();

examsRouter.use(authMiddleware);
examsRouter.post('/testExamSample', async (req: any, res: any) => {

  try {
    const exam: ExamInterface = req.body;
    const isPositive = checkIfSampleIsPositive(exam);
    const examResult = await Exam.create({ userId: req.userId, isPositive, createdAt: new Date(), exam }) as ExamDocument;

    res.send({ isPositive, result: examResult });
  } catch (error) {
    console.error('testExamSample error', error);

    return res.status(400).send({ error: 'Erro ao registrar o exame' });
  }

});

examsRouter.get('/', async (req, res) => {
  try {

    const examResults = await Exam.find() as ExamDocument[];

    return res.send({ exams: examResults });

  } catch (error) {
    console.error('exams error', error);

    return res.status(400).send({ error: 'Erro ao cadastrar o usuário' });
  }
})

/**
 * Verifica se a amostra é positiva ou negativa
 * @param exam 
 * @returns 
 */
export function checkIfSampleIsPositive(exam: any): boolean {
  const examMap: any = exam;

  // para cada parametro verifica se o valor é maior do que a nota de corte
  for (let [key, value] of Object.entries(exameScore)) {

    // Se for cocaína além de verificar se o valor é maior do que a nota de corte... 
    // ... Verifica se Benzoilecgonina, Cocaetileno ou Norcocaína estão com o valor igual ou superior a 0.05
    if (key === 'Cocaína') {
      if (examMap[key] >= value &&
        (
          examMap.Benzoilecgonina >= 0.05 ||
          examMap.Cocaetileno >= 0.05 ||
          examMap.Norcocaína >= 0.05
        )) {
        return true;
      }
    } else {
      if (examMap[key] >= value) {
        return true;
      }
    }

  }

  return false;

}

export default examsRouter;