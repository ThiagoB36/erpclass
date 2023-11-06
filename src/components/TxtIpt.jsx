import { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import store from "../config/store/store";

function TxtIpt(props) {
  const { label, change, pHolder, mask, textAlign, editable, marginLeft } =
    props;

  const styles = StyleSheet.create({
    input: {
      width: "100%",
      height: 30,
      borderWidth: 1,
      borderColor: "#fff",
      borderRadius: 10,
      margin: 0,
      alignSelf: "center",
      color: "black",
      fontSize: 15,
    },
    text: {
      fontSize: 15,
      fontWeight: "bold",
      marginLeft: marginLeft ?? 20,
      textAlign: "left",
      marginTop: textAlign ?? 10,
      marginBottom: 5,
      marginEnd: 10,
    },
  });

  const [sttDefault, setDefault] = useState("");
  store.dispatch(change(sttDefault));
  const str = store.getState();

  console.log({ str });
  return (
    <View style={{ flexDirection: "row", width: "100%" }}>
      <View style={{ width: "50%", alignItems: "center" }}>
        <Text style={styles.text}>{label}</Text>
      </View>
      <View style={{ width: "50%" }}>
        <TextInput
          label="prods"
          placeholder={pHolder}
          style={styles.input}
          onChangeText={(text) => setDefault(text)}
          value={sttDefault}
          editable={editable ?? true}
        />
      </View>
    </View>
  );
}
export default TxtIpt;
