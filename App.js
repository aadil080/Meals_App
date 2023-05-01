import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./sceens/CategoriesScreen";
import MealsOverviewScreen from "./sceens/MealsOverviewScreen";
import MealDetailScreen from "./sceens/MealDetailScreen";
import FavouriteScren from "./sceens/FavouriteScreen";
import FavouriteContextProvider from "./store/context/favourite-context";

const Stack = createNativeStackNavigator(); // This sholud be called outside of the App function. The "Stack" is the variable of "createNativeStackNavigator()".
const Drawer = createDrawerNavigator();
//const Tabs = createBottomTabNavigator();

export default function App() {
  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#ac41ff" },
          drawerActiveBackgroundColor: "#a7ffb5",
          drawerActiveTintColor: "#ac41ff",
          drawerContentStyle: { backgroundColor: "#6fe0f9" },
        }}
      >
        <Drawer.Screen
          name="All Categories"
          component={CategoriesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name='list' color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favourite"
          component={FavouriteScren}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="bookmark" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <FavouriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerStyle: { backgroundColor: "#ac41ff" } }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={DrawerNavigator} // The Drawer screen is applied instead of stack screen and it is nested
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverviewScreen"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
