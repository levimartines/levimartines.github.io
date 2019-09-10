var Swal = require('sweetalert2');

function enviarForm() {
    Swal.fire(
        'Enviado!',
        'Email enviado com sucesso!',
        'success'
    );
    return false; // Prevent page refresh
}