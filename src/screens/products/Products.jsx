import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { container } from "../../config/default/stlPages";
import { colorFour, colorThree } from "../../config/default/colorsDefault";
import TxtIpt from "../../components/TxtIpt";
import { useState } from "react";

function Products() {
  const [sttOn, setOn] = useState(false);

  const [sttSave, setSave] = useState(false);

  function btnAdd() {
    setOn(true);
    setSave(true);
  }

  function btnSave() {
    console.log("Salvar Produto");
  }

  function AddProdsForm() {
    return (
      <View style={styles.box}>
        <TxtIpt label="Código do Produto" />
        <TxtIpt label="Nome do Produto" />
        <TxtIpt label="Marca" />
        <TxtIpt label="Modelo" />
        <TxtIpt label="Valor de Custo" />
        <TxtIpt label="Valor de Venda" />
        <TxtIpt label="Quantidade em Estoque" />
      </View>
    );
  }
  return (
    <View style={container}>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.btn}
          onPress={sttSave ? btnSave : btnAdd}
        >
          <Text style={styles.txt}>
            {sttSave ? "Salvar Produto" : "Adicionar Produtos"}
          </Text>
        </TouchableOpacity>
        {sttOn && <AddProdsForm />}
      </View>
    </View>
  );
}
export default Products;

const styles = StyleSheet.create({
  box: {
    flexDirection: "column",
    width: "80%",
    top: 20,
    alignItems: "center",
  },
  btn: {
    padding: 18,
    backgroundColor: colorFour,
    borderRadius: 30,
    height: 30,
    width: 200,
    justifyContent: "center",
  },
  txt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    color: colorThree,
  },
});
