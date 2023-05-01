import { FlatList } from "react-native";

import CategoryGridTile from "../Component/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import MealsOverviewScreen from "./MealsOverviewScreen";

function CategoriesScreen({ navigation }) {
  // This "navigation" prop is used by react native to navigate through different Screens. And this should not be used by any children of the function onlly used by screen that we described in App.js
  function renderCategoryItem(itemData) {
    //this is an helper function
    function pressHandler() {
      navigation.navigate("MealsOverviewScreen", {
        // Here the "name" of the next screen should written as String.
        categoryId: itemData.item.id,
        //title: itemData.item.title
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
