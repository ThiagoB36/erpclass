import { useState } from "react";
import store from "../config/store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getUserFBInfo from "../config/routes/actions/getUserFBInfo";
import { changeUser } from "../config/store/userSlice";

function PrivateLogin(props) {
  const { children, navigation } = props;

  const str = store.getState();
  const userId = str.user.userInfo.docId;

  const [sttShow, setShow] = useState(false);
  const [sttFirstCond, setFirstCond] = useState(false);

  if (!sttFirstCond) {
    if (!userId) {
      setShow(false);
      setFirstCond(true);
    } else {
      setShow(true);
      setFirstCond(true);
    }
  }
  function Navigat() {
    navigation.navigate("Produtos");
  }
  async function getUser() {
    const userId = await AsyncStorage.getItem("erpclassId");

    if (userId) {
      const userDbInfo = await getUserFBInfo(userId);
      store.dispatch(changeUser(userDbInfo));
      setShow(true);
    }
  }

  getUser();

  return !sttShow ? children : <Navigat />;
}
export default PrivateLogin;
