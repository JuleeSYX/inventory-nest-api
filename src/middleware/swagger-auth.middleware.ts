import { Request, Response, NextFunction } from 'express';
import * as basicAuth from 'basic-auth';

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const user = basicAuth(req);    
  if (!user || user.name !== 'admin' || user.pass !== 'batman') {
    res.set('WWW-Authenticate', 'Basic realm="example"');
    return res.status(401).send('Authentication required.');
  }
  next();
};

export default authenticate;