import { Router } from 'express';

import {postOpenIARecipe} from '../controller/openai.controller';

const openaiRouter = Router();

openaiRouter.post('/recipe/query',  postOpenIARecipe);

  export default openaiRouter;