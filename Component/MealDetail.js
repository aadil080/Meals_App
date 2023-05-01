import { StyleSheet, View, Text } from "react-native";

function MealDetail({ duration, affordability, complexity, subText }) {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, subText]}>{duration}m</Text>
      <Text style={[styles.detailItem, subText]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, subText]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetail;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
