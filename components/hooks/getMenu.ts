import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { menuType } from "../../types/menuTyps";
import { FavoriteType } from "../../store/favoriteSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { storeMenu } from "../../store/menuSlice";

const getMeal = async (name: string) => {
  const { data }: { data: { meals: menuType[] } } = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
  );
  return data;
};

export const addFavoriteToMeal = (
  data: menuType[],
  favoriteData: menuType[]
) => {
  let newData: FavoriteType[] = [];
  if (favoriteData.length === 0) {
    data.forEach((item) => {
      newData.push({ ...item, favorite: false });
    });
    return newData;
  }

  let execute: boolean;
  data.forEach((item) => {
    execute = true;
    const mealInFavorite = favoriteData.some(
      (meal) => meal.idMeal === item.idMeal
    );
    if (mealInFavorite) {
      return newData.push({ ...item, favorite: true });
    } else {
      newData.push({ ...item, favorite: false });
    }
  });

  return newData;
};
const useGetMenu = (
  menu: string,
  favorite: FavoriteType[],
  dispatch: Dispatch<AnyAction>
) => {
  const { isLoading, data, isError, refetch } = useQuery(
    ["menu"],
    () => getMeal(menu),
    {
      select: (data) => addFavoriteToMeal(data.meals, favorite),
      onSuccess: (data) => {
        dispatch(storeMenu(data));
      },
    }
  );

  return { isLoading, data, isError, refetch };
};

export default useGetMenu;
