import { Router } from 'express';
import { getAllCategories } from '../controller/category.controller';

const categoryRouter = Router();

categoryRouter.get('/',  getAllCategories);

  export default categoryRouter;