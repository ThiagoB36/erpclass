import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function iconNav(route, color, size) {
  let iconName;
  let result;

  switch (route.name) {
    case "Produtos":
      iconName = "shopping-barcode";
      result = <Fontisto name={iconName} size={size} color={color} />;
      break;
    case "Clientes":
      iconName = "person-add";
      result = <Ionicons name={iconName} size={size} color={color} />;
      break;
    case "Vendas":
      iconName = "sale";
      result = (
        <MaterialCommunityIcons name={iconName} size={size} color={color} />
      );
      break;
    case "Financeiro":
      iconName = "monetization-on";
      result = <MaterialIcons name={iconName} size={size} color={color} />;
      break;
    case "Estoque":
      iconName = "store";
      result = <MaterialIcons name={iconName} size={size} color={color} />;
      break;
    case "Admin":
      iconName = "menu";
      result = <Ionicons name={iconName} size={size} color={color} />;
      break;
  }
  return result;
}
export default iconNav;
