import { Timestamp, setDoc } from "firebase/firestore";

async function addNewUser(props) {
  const { userDbInfo, refDoc } = props;
  userDbInfo.createdAt = Timestamp.now();
  userDbInfo.docId = refDoc.id;
  const dataToAdd = { ...userDbInfo };

  await setDoc(refDoc, dataToAdd);
}
export default addNewUser;
