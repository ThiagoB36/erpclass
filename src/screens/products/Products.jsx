import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { container } from "../../config/default/stlPages";
import { colorFour, colorThree } from "../../config/default/colorsDefault";
import TxtIpt from "../../components/TxtIpt";
import { useState } from "react";
import Private from "../../components/Private";
import {
  changeProdsBrand,
  changeProdsCode,
  changeProdsCost,
  changeProdsModel,
  changeProdsName,
  changeProdsPrice,
  changeProdsStock,
} from "../../config/store/prodsSlice";

function Products({ navigation }) {
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
        <TxtIpt label="Código do Produto" change={changeProdsCode} />
        <TxtIpt label="Nome do Produto" change={changeProdsName} />
        <TxtIpt label="Marca" change={changeProdsBrand} />
        <TxtIpt label="Modelo" change={changeProdsModel} />
        <TxtIpt label="Valor de Custo" change={changeProdsCost} />
        <TxtIpt label="Valor de Venda" change={changeProdsPrice} />
        <TxtIpt label="Quantidade em Estoque" change={changeProdsStock} />
      </View>
    );
  }
  return (
    <Private navigation={navigation}>
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
    </Private>
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
