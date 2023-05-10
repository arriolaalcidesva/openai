import { Router } from 'express';
import { getAllCategories } from '../controller/category.controller';
import { tokenValid } from '../middleware/general';

const categoryRouter = Router();

categoryRouter.get('/', tokenValid,  getAllCategories);

  export default categoryRouter;