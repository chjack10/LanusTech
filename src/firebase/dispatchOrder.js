import { db } from './config';
import {
  collection,
  writeBatch,
  getDocs,
  addDoc,
  Timestamp,
  query,
  where,
  documentId,
} from 'firebase/firestore';

const dispatchOrder = async (
  cart,
  userData,
  totalCartPrice,
  setOrderId,
  setError
) => {
  const outOfStock = [];
  const batch = writeBatch(db);

  //* Check and update each items's stock in firestore.

  const q = query(
    collection(db, 'items'),
    where(
      documentId(),
      'in',
      cart.map((item) => item.id)
    )
  );

  try {
    const { docs: itemDocs } = await getDocs(q);

    itemDocs.forEach((doc) => {
      const item = cart.find((item) => item.id === doc.id);

      if (doc.data().stock >= item.quantity) {
        batch.update(doc.ref, { stock: doc.data().stock - item.quantity });
      } else {
        setError(`${doc.data().title} is out of stock`);
        outOfStock.push(doc.data().title);
      }
    });
  } catch (error) {
    setError(`${error.name}: ${error.message}`);
  }

  //* Upload order to firestore (Commit batch).

  if (outOfStock.length === 0) {
    const order = {
      buyer: userData,
      items: cart,
      total: totalCartPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    try {
      const { id } = await addDoc(collection(db, 'orders'), order);
      batch.commit();
      setOrderId(id);
    } catch (error) {
      setError(`${error.name}: ${error.message}`);
    }
  }
};

export default dispatchOrder;
