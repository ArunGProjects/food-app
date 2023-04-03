import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};
export const saveData = async (details) => {
  await setDoc(doc(firestore, "Customer", `${Date.now()}`), details, {
    merge: true,
  });
};
export const savePay = async (Card) => {
  await setDoc(doc(firestore, "Card", `${Date.now()}`), Card, {
    merge: true,
  });
};
export const saveOrder = async (Item) => {
  await setDoc(doc(firestore, "Order", `${Date.now()}`), Item, {
    merge: true,
  });
};
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};
