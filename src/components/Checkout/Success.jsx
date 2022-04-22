import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';

const Success = ({ orderId }) => {
  return (
    <>
      <Box
        display='flex'
        justifyContent='center'
        className='animate__animated animate__pulse'
      >
        <img src='/assets/img/lanus-logo.svg' alt='success' width={200} />
      </Box>
      <Typography variant='h5' align='center' gutterBottom>
        Muchas gracias por tu compra!
      </Typography>

      <Typography variant='subtitle1'>
        Tu código de compra es:{' '}
        <Typography variant='subtitle' color='primary'>
          {orderId}
        </Typography>
        . Enviamos un email a tu correo con los detalles de tu compra y
        estaremos en contacto con vos para seguir el estado de tu pedido.
      </Typography>

      <Button
        color='primary'
        component={Link}
        to='/'
        sx={{ mt: 3, mx: 'auto', display: 'block', textAlign: 'center' }}
      >
        Volver al inicio
      </Button>
    </>
  );
};
export default Success;
