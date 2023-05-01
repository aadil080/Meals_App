import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function Icon({ onPress, icon, color }) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed} >
      <Ionicons name={icon} color={color} size={24} />
    </Pressable>
  );
}

export default Icon;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
