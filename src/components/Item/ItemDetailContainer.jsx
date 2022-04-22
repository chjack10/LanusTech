import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import LoadingSpinner from '../ui/LoadingSpinner';
import ItemDetail from './ItemDetail';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(async () => {
    try {
      const docRef = doc(db, 'items', itemId);
      const docItem = await getDoc(docRef);

      setItem({ id: docItem.id, ...docItem.data() });
    } catch (err) {
      console.error(err);
    }
  }, [itemId]);

  return item ? <ItemDetail {...item} /> : <LoadingSpinner />;
};

export default ItemDetailContainer;
