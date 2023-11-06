import { Text, View } from "react-native";
import { container } from "../../config/default/stlPages";
import { StyleSheet } from "react-native";

function Clients() {
  return (
    <View style={container}>
      <View style={styles.box}>
        <Text>Clients PAGE</Text>
      </View>
    </View>
  );
}
export default Clients;

const styles = StyleSheet.create({
  box: {
    flexDirection: "column",
    width: "80%",
    top: 20,
    alignItems: "center",
  },
});
