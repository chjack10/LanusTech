import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';
import ItemDescription from './ItemDescription';
import ItemCount from './ItemCount';

import SuccessSnackbar from '../ui/SuccessSnackbar';
import GoBackBtn from '../ui/GoBackBtn';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const ItemDetail = ({ id, title, description, price, stock }) => {
  const { addItemToCart, isInCart } = useContext(CartContext);
  const [showSuccessBar, setShowSuccessBar] = useState(false);
  const imgPath = `/assets/img/${id}.jpg`;

  const handleAddItemToCart = (quantity) => {
    if (isInCart(id) || quantity === 0) return;

    addItemToCart({ id, title, price, quantity });
    setShowSuccessBar(true);
  };

  return (
    <>
      <Grid
        container
        mt={5}
        className='animate__animated animate__fadeIn'
        spacing={3}
      >
        <Grid
          item
          sm={6}
          md={4}
          className='animate__animated animate__fadeInLeft'
        >
          <Card raised>
            <CardMedia component='img' image={imgPath} alt={id} />
          </Card>
          <Box
            display='flex'
            justifyContent='space-between'
            mt={1}
            alignContent='center'
          >
            <GoBackBtn />

            <Typography component='h5' variant='h6' textAlign='center'>
              ${price}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <Typography component='h3' textAlign='center' gutterBottom>
            {title}
          </Typography>
          <Divider />

          <ItemDescription characteristics={description} />
          <Divider sx={{ mb: 2 }} />

          <Box display='flex' justifyContent={'center'} my>
            {isInCart(id) ? (
              <Button
                variant='contained'
                color='error'
                startIcon={<AssignmentTurnedInIcon />}
                component={Link}
                to='/cart'
              >
                Terminar mi compra
              </Button>
            ) : stock > 0 ? (
              <ItemCount stock={stock} onAdd={handleAddItemToCart} />
            ) : (
              <Typography variant='h6' color='textSecondary'>
                Sin stock
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
      {showSuccessBar && (
        <SuccessSnackbar message={'Producto agregado al carrito'} />
      )}
    </>
  );
};

export default ItemDetail;
