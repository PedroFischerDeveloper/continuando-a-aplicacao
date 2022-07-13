import {Router} from 'express';
import { categoriesRoutes } from './categorys.routes';
import { specificationsRoute } from './specification.routes';

const router = Router();
 
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoute);

export {router}