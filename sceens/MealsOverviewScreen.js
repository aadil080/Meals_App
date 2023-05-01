import { useLayoutEffect } from "react";

import MealsList from "../Component/MealsList/MealsLists";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  // This "route" prop is only used
  const catId = route.params.categoryId;
  //const catTitle = route.params.title;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // "useLayoutEffect" works similar as "useEffect" but it render its element before the component is been executed.
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
