import { Router } from 'express';

import { signIn, checkAuth } from 'controllers/auth';
import validateToken from 'middlewares/validateToken';
import { authValidation } from 'validation/auth';

import github from './github';

const router = Router();

router.use('/github', github);

router.post('/', authValidation, signIn);
router.get('/', checkAuth);
router.get('/test', validateToken, (req, res) => {
  res.status(200).json({ message: 'validateToken 미들웨어 테스트 성공' });
});

export default router;