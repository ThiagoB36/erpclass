import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import getFBInfo from "../../screens/login/actions/getFBInfo";
import { doc } from "firebase/firestore";
import addNewUser from "../../screens/login/actions/addNewUser";

async function googleSignIn(navigation) {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const userData = result.user;

  console.log({ userData });
  const dbInfo = await getFBInfo(userData);
  const { condNewUser, refColl, arrUser } = dbInfo;

  const userDbInfo = {
    userName: userData.displayName,
    userImg: userData.photoURL,
    userEmail: userData.email,
    docId: arrUser[0] && arrUser[0].docId ? arrUser[0].docId : "",
  };

  const refDoc = doc(refColl);

  if (condNewUser) {
    await addNewUser({ userDbInfo, refDoc });
  } else {
    console.log("nao é novo usuario");
    navigation.navigate("Produtos");
  }
}
export default googleSignIn;
