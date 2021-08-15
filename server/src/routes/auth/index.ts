import { Router } from 'express';

import { signIn } from 'controllers/auth';
import { authValidation } from 'validation/auth';

const router = Router();

router.post('/', authValidation, signIn);

export default router;
