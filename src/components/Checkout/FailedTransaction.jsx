import GoBackBtn from '../ui/GoBackBtn';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const FailedTransaction = ({ error }) => {
  return (
    <>
      <Typography variant='h5' align='center' gutterBottom>
        Hubo un error en la transacción... Contacte con el administrador para
        más información.
      </Typography>

      <Divider
        sx={{
          my: { xs: 3, md: 6 },
          mx: { xs: 'auto', md: 0 },
        }}
        variant='middle'
      />

      <Typography variant='subtitle1' align='center' gutterBottom>
        {`Detalle del problema: ${error}`}
      </Typography>

      <GoBackBtn />
    </>
  );
};
export default FailedTransaction;
