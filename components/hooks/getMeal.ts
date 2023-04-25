import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { mealType } from "../../types/mealType";
import { storeMeal } from "../../store/mealSlice";
import { FavoriteType } from "../../store/favoriteSlice";
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";

const getMeal = async (idMeal: string) => {
  const { data: meals }: { data: { meals: mealType[] } } = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  return meals;
};

const useGetMeal = (
  idMeal: string,
  mealFavorites: FavoriteType[],
  dispatch: Dispatch<AnyAction>
) => {
  const { isLoading, data, isError, remove } = useQuery(
    ["meal"],
    () => getMeal(idMeal),
    {
      select: (data) => data.meals[0],
      onSuccess: (data) => {
        if (mealFavorites.length === 0) {
          dispatch(storeMeal({ ...data, favorite: false }));
        } else {
          const mealInFavorite = mealFavorites.some(
            (item) => item.idMeal === data.idMeal
          );
          if (mealInFavorite) {
            dispatch(storeMeal({ ...data, favorite: true }));
          } else {
            dispatch(storeMeal({ ...data, favorite: false }));
          }
        }
        return data;
      },
    }
  );

  return { isLoading, data, isError, remove };
};

export default useGetMeal;
