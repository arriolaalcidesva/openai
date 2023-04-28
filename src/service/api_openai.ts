import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const OPENAI_URI = `${process.env.URL_OPEN_IA}/`;

export const getRecipes = async (recipeQuery: string) =>{
    try {
        const headers = { 'Authorization': `Bearer ${process.env.TOKEN}` };
        const qryRecipe = `Q:${recipeQuery}, retorna en formato de json, indicando en un campo los ingredientes, pasos para la coccion y dame una imagen del plato terminado para usar como banner, A:`;

        const bodyQuery = {
            "model": "text-davinci-003",
            "prompt": qryRecipe,
            "temperature": 1,
            "max_tokens":4000
          };

        const response = await axios.post(`${OPENAI_URI}completions`, bodyQuery, {headers});

        const recipeResp = response?.data?.choices[0].text;

        const cleanedJsonString = recipeResp.trim().replace(/\n/g, '');
        const recipe = JSON.parse(cleanedJsonString);

        console.log(recipe);

        return recipe;
        
    } catch (error) {
        console.log(error)
        throw error;
    }
}