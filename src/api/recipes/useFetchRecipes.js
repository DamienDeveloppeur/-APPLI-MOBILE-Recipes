// const { getAllRecipes } = useFetchRecipes()
import axios from "axios"

const URL_API = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "003ecaa844e34becbeb64980e01e2a46";
const MAX_RESULT = 30
export const useFetchRecipes = () => {
    
    const getAllRecipes = async () => {
        try {
            const response = await axios.get(URL_API, {
                params: {
                    apiKey: API_KEY,
                    number: MAX_RESULT
                }
               
            })
            console.log("response", response)
        } catch(e){
            console.error("Error in getAllRecipes")
        }
       
    } 
    return {
        getAllRecipes
    }
}