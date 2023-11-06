import { useState } from "react";
import store from "../config/store/store";

function Private(props) {
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
    navigation.navigate("Login");
  }

  return sttShow ? children : <Navigat />;
}
export default Private;
