import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { useContext, useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import MealDetail from "../Component/MealDetail";
import List from "../Component/List";
import Icon from "../Component/Icon";
import { FavouriteContext } from "../store/context/favourite-context";

function MealDetailScreen({ route, navigation }) {
  const favouriteMealCtx = useContext(FavouriteContext);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavourite = favouriteMealCtx.ids.includes(mealId);

  function changeFavouriteStatusHandler() {
    if (mealIsFavourite) {
      favouriteMealCtx.removeFavourite(mealId);
    } else {
      favouriteMealCtx.addFavourite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Icon
            icon={mealIsFavourite ? "bookmark" : "bookmark-outline"}
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        subText={styles.subText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.helperContainer}>
            <Text style={styles.helperText}>Ingredients</Text>
          </View>
          <List data={selectedMeal.ingredients} />
          <View style={styles.helperContainer}>
            <Text style={styles.helperText}>Steps</Text>
          </View>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    margin: 10,
  },
  helperText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  helperContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 10,
    borderBottomColor: "#ff5d5d",
    borderBottomWidth: 2,
  },
  subText: {
    fontSize: 14,
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
