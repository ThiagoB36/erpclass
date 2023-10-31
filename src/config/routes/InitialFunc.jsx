import AsyncStorage from "@react-native-async-storage/async-storage";
import getUserFBInfo from "./actions/getUserFBInfo";
import store from "../store/store";
import { changeUser } from "../store/userSlice";
import { useState } from "react";

function InitialFunc(props) {
  const { children } = props;

  const [sttShow, setShow] = useState(false);

  async function getUser() {
    const userId = await AsyncStorage.getItem("erpclassId");

    if (userId) {
      const userDbInfo = await getUserFBInfo(userId);
      store.dispatch(changeUser(userDbInfo));
      //   setShow(true);
    }
  }

  getUser();

  return sttShow ? children : null;
}
export default InitialFunc;
