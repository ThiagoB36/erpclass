import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { colorThree, colorTwo } from "../../config/default/colorsDefault";

function Login() {
  return (
    <View style={styles.view1}>
      <TouchableOpacity style={styles.touch}>
        <View style={styles.view2}>
          <AntDesign name="google" size={30} color={"black"} />
        </View>
        <View style={styles.view3}>
          <Text style={styles.txt}>Continuar com google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: colorThree,
  },
  view2: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  view3: {
    height: 50,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  touch: {
    width: 300,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colorTwo,
  },
  txt: {
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "monospace",
    fontWeight: "bold",
    color: "black",
  },
});
