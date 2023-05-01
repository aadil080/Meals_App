import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";

import MealsList from "../Component/MealsList/MealsLists";
import { FavouriteContext } from "../store/context/favourite-context";
import { MEALS } from "../data/dummy-data";

function FavouriteScren() {
  const favouriteMealCtx = useContext(FavouriteContext);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealCtx.ids.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.textStyle}>No Favourite Meals To Show</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
}

export default FavouriteScren;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
});
