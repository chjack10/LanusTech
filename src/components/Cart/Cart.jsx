import { useContext, Fragment } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import GoBackBtn from '../ui/GoBackBtn';

const Cart = () => {
  const { amountOfItemsInCart, totalCartPrice, cart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <>
      <h2>{`Mi carrito (${amountOfItemsInCart()})`}</h2>
      <hr />
      <br />
      {cart.length > 0 ? (
        <>
          <Container className='animate__animated animate__fadeIn'>
            {cart.map((item) => (
              <Fragment key={item.id}>
                <CartItem {...item} removeItemFromCart={removeItemFromCart} />
                <Divider variant='middle' sx={{ my: 3 }} />
              </Fragment>
            ))}
          </Container>

          <Typography
            variant='h6'
            align='right'
            className='animate__animated animate__fadeInUp'
          >
            Total: {'$' + totalCartPrice().toFixed(2)}
          </Typography>

          <Box display='flex' gap justifyContent={'center'} my>
            <Button
              variant='contained'
              color='error'
              component={Link}
              to='/checkout'
              startIcon={<PointOfSaleIcon />}
            >
              Proceder al pago
            </Button>
          </Box>

          <GoBackBtn />
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
