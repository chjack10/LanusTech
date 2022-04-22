export default function validatePaymentForm(values, setError) {
  const errors = {};

  //cardNumber

  if (!values.cardNumber) {
    errors.cardNumber = 'Número de tarjeta requerido';
  } else if (values.cardNumber?.length < 16 || values.cardNumber?.length > 16) {
    errors.cardNumber = 'El número de la tarjeta debe ser de 16 dígitos';
  } else if (!/^[0-9]*$/i.test(values.cardNumber)) {
    errors.cardNumber = 'El número de la tarjeta no es válido';
  }

  //cardName

  if (!values.cardName) {
    errors.cardName = 'Nombre de tarjeta requerido';
  } else if (values.cardName?.length < 3) {
    errors.cardName = 'El nombre en tarjeta debe tener al menos 3 caracteres';
  } else if (!/^[A-Za-z]+(?:[ _-][A-Za-z]+)*$/i.test(values.cardName)) {
    errors.cardName = 'El nombre en tarjeta no es válido';
  }

  //cardExpDate

  if (!values.cardExpDate) {
    errors.cardExpDate = 'Fecha de vencimiento requerida';
  }

  //cardCvv

  if (!values.cardCvv) {
    errors.cardCvv = 'Pin requerido';
  } else if (values.cardCvv?.length !== 3) {
    errors.cardCvv = 'El pin debe ser de 3 dígitos';
  } else if (!/^[0-9]*$/i.test(values.cardCvv)) {
    errors.cardCvv = 'El pin no es válido';
  }

  setError(errors);

  return Object.keys(errors).length === 0 ? true : false;
}
