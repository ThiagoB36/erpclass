import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import getFBInfo from "../../screens/login/actions/getFBInfo";
import { doc } from "firebase/firestore";
import addNewUser from "../../screens/login/actions/addNewUser";
import store from "../store/store";
import { changeUser } from "../store/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function googleSignIn(navigation) {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const userData = result.user;

  const dbInfo = await getFBInfo(userData);
  const { condNewUser, refColl, arrUser } = dbInfo;

  const userDbInfo = {
    userName: userData.displayName,
    userImg: userData.photoURL,
    userEmail: userData.email,
    docId: arrUser[0] && arrUser[0].docId ? arrUser[0].docId : "",
  };

  const refDoc = doc(refColl);

  async function setItem() {
    await AsyncStorage.setItem("erpclassId", userDbInfo.docId);
  }

  if (condNewUser) {
    await addNewUser({ userDbInfo, refDoc });
    store.dispatch(changeUser(userDbInfo));
    setItem();
    navigation.navigate("Produtos");
  } else {
    store.dispatch(changeUser(userDbInfo));
    setItem();
    navigation.navigate("Produtos");
  }
}
export default googleSignIn;
