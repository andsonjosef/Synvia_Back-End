import User, { UserDocument } from '../schemas/User';
import bcrypt from 'bcryptjs';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
const authRouter = Router();
import authConfig from '../config/auth.config';

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  })
}

authRouter.post('/register', async (req, res) => {

  try {

    if (await User.findOne({ email: req.body.email })) {
      return res.status(400).send({ error: 'Usuário já cadastrado' });
    }

    const user = await User.create(req.body) as UserDocument;
    user.password = undefined;

    return res.send({ user, token: generateToken({ id: user.id }) });

  } catch (error) {
    console.error('register error', error);

    return res.status(400).send({ error: 'Erro ao cadastrar o usuário' });
  }

});

authRouter.post('/authenticate', async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password') as UserDocument;

    if (!user) {
      return res.status(400).send({ error: 'Usuário não encontrado' });
    }

    if (!user.password || !await bcrypt.compare(password, user.password)) {
      return res.status(400).send({ error: 'Senha incorreta' });
    }

    user.password = undefined;


    return res.send({ user, token: generateToken({ id: user.id }) });

  } catch (error) {
    console.error('authenticate error', error);
    return res.status(400).send({ error: 'Erro ao autenticar o usuário' });
  }

});


export default authRouter;