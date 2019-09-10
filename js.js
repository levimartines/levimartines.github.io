var Swal = require('sweetalert2');

function enviarForm() {
    var form = document.getElementById("meuForm");
    var email = form.elements.item(1).value;
    console.log(email);
    if (email != "") {
        Swal.fire(
            'Enviado!',
            'Email enviado com sucesso!',
            'success'
        );
        form.reset();
    } else {
        Swal.fire(
            'Formulário incompleto',
            'Preencha todo o formulário antes de enviar!',
            'error'
        );
    }
    return false; // Prevent page refresh
}