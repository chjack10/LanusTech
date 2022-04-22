import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ id, title, price, quantity, removeItemFromCart }) => {
  const imgPath = `/assets/img/${id}.jpg`;
  const handleRemoveItem = () => removeItemFromCart(id);

  return (
    <>
      <Grid container gap>
        <Grid
          item
          xs={12}
          md={2}
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <img src={imgPath} alt={id} height='150' width='150' />
        </Grid>

        <Grid
          item
          xs={12}
          md={2}
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <Typography variant='inherit'>{title}</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <Box>
            <FormHelperText>Precio unitario</FormHelperText>
            <Typography variant='inherit'>{'$' + price}</Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <FormHelperText>Cantidad </FormHelperText>
          <Typography variant='inherit'>{quantity}</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <FormHelperText>Subtotal </FormHelperText>
          <Typography variant='inherit'>
            {'$' + (price * quantity).toFixed(2)}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={2}
          md={1}
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <Tooltip title='Eliminar' placement='top'>
            <IconButton onClick={handleRemoveItem}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
};

export default CartItem;
