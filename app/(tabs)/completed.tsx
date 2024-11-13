import { Text, View, StyleSheet } from "react-native";

export default function CompletedScreen() {
  return (
    <View
      style={styles.container}>
      <Text style={styles.text}>Completed screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#cdcbd4",
  },
  text: {
      fontSize: 24,
      color: "#332c54",
  },
});