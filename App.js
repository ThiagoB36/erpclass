import { StyleSheet, View } from "react-native";
import Starting from "./src/config/routes/Starting";

export default function App() {
  return (
    <View style={styles.container}>
      <Starting />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
