import { Router } from 'express';
import { barberRoutes } from './barber.routes.js';

const router = Router();

router.use('/barbers', barberRoutes);

export const routes = router;
