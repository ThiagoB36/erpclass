import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import Login from "../../screens/login/Login";
import Sales from "../../screens/sales/Sales";
import Clients from "../../screens/clients/Clients";
import Products from "../../screens/products/Products";
import Stock from "../../screens/stock/Stock";
import Management from "../../screens/management/Management";
import Admin from "../../screens/admin/Admin";
import iconNav from "./helpers/iconNav";
import { colorOne, colorThree, colorTwo } from "../default/colorsDefault";

function Routes() {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Login"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              const iconsNavig = iconNav(route, color, size);
              return iconsNavig;
            },
            headerShown: false,
            tabBarStyle: [
              {
                backgroundColor: colorThree,
                position: "absolute",
                height: 50,
                top: -2,
              },
              { display: route.name === "Login" && "none" },
            ],
            tabBarActiveTintColor: colorOne,
            tabBarInactiveTintColor: colorTwo,
            tabBarLabelStyle: { fontSize: 14 },
          })}
        >
          <Tab.Screen
            name="Login"
            component={Login}
            options={{ tabBarButton: () => null }}
          />
          <Tab.Screen name="Clientes" component={Clients} />
          <Tab.Screen name="Vendas" component={Sales} />
          <Tab.Screen name="Produtos" component={Products} />
          <Tab.Screen name="Estoque" component={Stock} />
          <Tab.Screen name="Financeiro" component={Management} />
          <Tab.Screen name="Admin" component={Admin} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
export default Routes;
