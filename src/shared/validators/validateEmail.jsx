export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

export const emailValidateMessage = 'Por favor ingresa una dirección de correo electrónico válida.';