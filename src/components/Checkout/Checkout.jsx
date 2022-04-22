import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';

import DispatchCheckout from './DispatchCheckout';

import getStepContent from '../../helpers/getStepContent';
import validateAddressForm from '../../helpers/validateAddressForm';
import validatePaymentForm from '../../helpers/validatePaymentForm';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Dirección de envío', 'Detalles del pago', 'Chequeo de datos'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { userData, setErrors, resetUserData } = useContext(UserContext);
  const { cart, resetCart, totalCartPrice, amountOfItemsInCart } =
    useContext(CartContext);

  if (amountOfItemsInCart() === 0 && activeStep !== steps.length) {
    return <Navigate to='/' />;
  }

  const handleNext = () => {
    const formIsValid =
      activeStep === 0
        ? validateAddressForm(userData, setErrors)
        : validatePaymentForm(userData, setErrors);

    if (formIsValid) setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setErrors({});
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Container
        component='main'
        maxWidth='sm'
        className='animate__animated animate__fadeIn'
      >
        <Paper
          sx={{ mt: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          elevation={12}
        >
          <Typography component='h1' variant='h4' align='center'>
            Checkout
          </Typography>

          <Stepper
            activeStep={activeStep}
            sx={{ pt: 3, pb: 5, display: { xs: 'none', sm: 'flex' } }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <DispatchCheckout
                userData={userData}
                resetUserData={resetUserData}
                cart={cart}
                resetCart={resetCart}
                totalCartPrice={totalCartPrice}
              />
            ) : (
              <>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Volver
                    </Button>
                  )}

                  <Button
                    variant='contained'
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1
                      ? 'Terminar mi compra'
                      : 'Siguiente'}
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
      </Container>
    </>
  );
};

export default Checkout;
