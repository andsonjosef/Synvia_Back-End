
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth.config';


const authMiddleware = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: "Token não informado" });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).send({ error: 'Token não possui um formato válido' });
  }

  const [scheme, token] = parts;


  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'Token não possui um formato válido' });
  }

  jwt.verify(token, authConfig.secret, (error: any, decoded: any) => {
    if (error) {
      return res.status(401).send({ error: 'Token inválido' });
    }

    req.userId = decoded.id;
    return next();
  });

}

export default authMiddleware;