import axios from "axios";
import { mealType } from "../../types/mealType";

const usePostSearch = async (strMeal: string) => {
  const { data: meals }: { data: { meals: mealType[] } } = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`
  );
  return meals;
};

export default usePostSearch;
