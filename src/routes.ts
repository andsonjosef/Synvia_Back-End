import authRouter from './controllers/auth.controller';
import examsRouter from './controllers/exams.controller';
import { Router } from 'express'

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/exams', examsRouter)
export default routes;