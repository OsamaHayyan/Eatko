import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { categoryType } from "../../types/categoryType";

const getAllCategories = async () => {
  const { data }: { data: { categories: categoryType[] } } = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  return data;
};

const useGetAllCategories = () => {
  const { isLoading, data, isError } = useQuery(
    ["category"],
    getAllCategories,
    {
      select: (data) =>
        data.categories.filter(
          (item) => item.strCategory !== "Pork" && item.strCategory !== "Goat"
        ),
    }
  );

  return { isLoading, data, isError };
};

export default useGetAllCategories;
