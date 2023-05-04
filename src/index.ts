import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import compression from 'compression';
import cors from 'cors';
import openAiRoutesV1 from "./routes/openai.route";
import recipeRoutesV1 from "./routes/recipe.route";
import categoryRoutesV1 from "./routes/category.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// middlewares aux
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const apiPathV1 = "/api/v1";

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(`${apiPathV1}/openai`, openAiRoutesV1);
app.use(`${apiPathV1}/recipes`, recipeRoutesV1);
app.use(`${apiPathV1}/categories`,categoryRoutesV1);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});