import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.listText} >{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#ff62ff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  listText: {
    fontSize: 14,
    textAlign: 'center'
  }
});
