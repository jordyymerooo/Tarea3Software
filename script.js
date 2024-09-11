const formularioCliente = document.getElementById('formulario-cliente');

formularioCliente.addEventListener('submit', (event) => {
    event.preventDefault();  // Evitar el envío predeterminado del formulario

    const cedula = document.getElementById('cedula').value;
    const apellidos = document.getElementById('apellidos').value;
    const nombres = document.getElementById('nombres').value;
    const direccion = document.getElementById('direccion').value;
    const correoElectronico = document.getElementById('correo_electronico').value;
    const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    const ciudad = document.getElementById('ciudad').value;

    // Validar que todos los campos estén llenos
    if (cedula === '' || apellidos === '' || nombres === '' || direccion === '' || correoElectronico === '' || fechaNacimiento === '' || ciudad === '') {
        document.getElementById('error-message').textContent = 'Todos los campos son obligatorios';
        return;  // Detener el procesamiento si hay campos vacíos
    } else {
        document.getElementById('error-message').textContent = '';  // Limpiar el mensaje de error
    }

    // Simulación del envío de datos
    setTimeout(() => {
        alert('Enviado correctamente');
        formularioCliente.reset();  // Vaciar los campos del formulario
    }, 500);  // Simular un retraso de 500ms para el envío
});
