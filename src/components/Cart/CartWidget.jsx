import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const CartWidget = () => {
  const { amountOfItemsInCart } = useContext(CartContext);

  return amountOfItemsInCart() > 0 ? (
    <Tooltip title='Ver carrito'>
      <IconButton
        sx={{ mx: 1 }}
        aria-label='carrito'
        size='large'
        color='inherit'
        component={Link}
        to='/cart'
      >
        <Badge badgeContent={amountOfItemsInCart()} color='error'>
          <ShoppingCartIcon sx={{ fontSize: 30 }} />
        </Badge>
      </IconButton>
    </Tooltip>
  ) : null;
};

export default CartWidget;
