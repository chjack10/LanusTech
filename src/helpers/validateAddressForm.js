export default function validateAddressForm(values, setErrors) {
  const errors = {};

  //name

  if (!values.name) {
    errors.name = 'Nombre requerido';
  } else if (values.name?.length < 3) {
    errors.name = 'El nombre debe tener al menos 3 caracteres';
  } else if (!/^[A-Za-z]+(?:[ _-][A-Za-z]+)*$/i.test(values.name)) {
    errors.name = 'El nombre no es válido';
  }

  //lastName

  if (!values.lastName) {
    errors.lastName = 'Apellido requerido';
  } else if (values.lastName?.length < 3) {
    errors.lastName = 'El apellido debe tener al menos 3 caracteres';
  } else if (!/^[A-Za-z]+(?:[ _-][A-Za-z]+)*$/i.test(values.lastName)) {
    errors.lastName = 'El Apellido no es válido';
  }

  //email

  if (!values.email) {
    errors.email = 'Email requerido';
  } else if (values.email?.length < 3) {
    errors.email = 'El email debe tener al menos 3 caracteres';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'El email no es válido';
  }

  //address

  if (!values.address) {
    errors.address = 'Dirección requerida';
  } else if (values.address?.length < 3) {
    errors.address = 'La dirección debe tener al menos 3 caracteres';
  }

  //city

  if (!values.city) {
    errors.city = 'Ciudad requerida';
  } else if (values.city?.length < 3) {
    errors.city = 'La ciudad debe tener al menos 3 caracteres';
  } else if (!/^[A-Za-z]+(?:[ _-][A-Za-z]+)*$/i.test(values.city)) {
    errors.city = 'La ciudad no es válida';
  }

  //state

  if (!values.state) {
    errors.state = 'Provicia/Estado requerido';
  } else if (values.state?.length < 3) {
    errors.state = 'El campo debe tener al menos 3 caracteres';
  } else if (!/^[A-Za-z]+(?:[ _-][A-Za-z]+)*$/i.test(values.state)) {
    errors.state = 'El campo no es válido';
  }

  if (!values.zip) {
    errors.zip = 'Código postal requerido';
  } else if (values.zip?.length < 4 || values.zip?.length > 6) {
    errors.zip = 'El código postal tiene que tener de 4 a 6 caracteres';
  } else if (!/^[0-9]{4,6}$/i.test(values.zip)) {
    errors.zip = 'El código postal no es válido';
  }

  //phoneNumber

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Teléfono requerido';
  } else if (
    values.phoneNumber?.length < 8 ||
    values.phoneNumber?.length > 10
  ) {
    errors.phoneNumber = 'El teléfono tiene que tener de 8 a 10 caracteres';
  } else if (!/^[0-9]{8,10}$/i.test(values.phoneNumber)) {
    errors.phoneNumber = 'El teléfono no es válido';
  }

  setErrors(errors);

  return Object.keys(errors).length === 0 ? true : false;
}
