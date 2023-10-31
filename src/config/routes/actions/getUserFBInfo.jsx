import { doc, getDoc } from "firebase/firestore";
import { firestoreInit } from "../../firebase/firebaseConfig";

async function getUserFBInfo(userId) {
  const dbRef = doc(firestoreInit, "users", userId);
  const data = await getDoc(dbRef);

  const dataSuccess = data.data();
  return dataSuccess;
}
export default getUserFBInfo;
