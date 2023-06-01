export default function validation(input) {
    // input = { email:--, password: ---}
    
    const error = {};
    // error= { email: ERROR, password: ERROR }

    const regexEmail = /\S+@\S+\.\S+/; //verifica si tiene letras+@+letras+.+letras
    const regexPassword = new RegExp("[0-9]"); //veifica que la contraseña tenga numeros

    if(!regexEmail.test(input.email)) {
        error.email = "¡You must enter a valid email!";
    }
    if(!input.email) {
        error.email = "¡You must enter an email!";
    }
    if(input.email.length > 35) {
        error.email = "¡Email must not be longer than 35 characters!"
    }
    if(!regexPassword.test(input.password)) {
        error.password = "¡Email must have at least one number!";
    }
    if(input.password.length < 6 || input.password.length > 10) {
        error.password = "¡Email must have between 6 and 10 characters!"
    }
    return error;
}