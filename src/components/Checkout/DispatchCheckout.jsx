import { useState, useEffect } from 'react';

import dispatchOrder from '../../firebase/dispatchOrder';
import LoadingSpinner from '../ui/LoadingSpinner';
import Success from './Success';
import FailedTransaction from './FailedTransaction';

const DispatchCheckout = ({
  userData,
  resetUserData,
  cart,
  resetCart,
  totalCartPrice,
}) => {
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(async () => {
    await dispatchOrder(cart, userData, totalCartPrice, setOrderId, setError);
    resetCart();
    resetUserData();
  }, []);

  return orderId ? (
    <Success orderId={orderId} />
  ) : error ? (
    <FailedTransaction error={error} />
  ) : (
    <LoadingSpinner text='Procesando transacción...' />
  );
};

export default DispatchCheckout;
