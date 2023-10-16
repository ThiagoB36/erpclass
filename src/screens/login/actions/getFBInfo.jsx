import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { firestoreInit } from "../../../config/firebase/firebaseConfig";

async function getFBInfo(userData) {
  const refColl = collection(firestoreInit, "users");
  const filter = where("userEmail", "==", userData.email);
  const dbRef = query(refColl, filter);
  const searchUser = await getDocs(dbRef);

  const arrUser = [];
  searchUser.forEach((doc) => {
    const obj = doc.data();
    return arrUser.push(obj);
  });

  const condNewUser = arrUser.length === 0;

  return { condNewUser, refColl, arrUser };
}
export default getFBInfo;
