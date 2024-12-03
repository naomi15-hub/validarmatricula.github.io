document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    
    const matricula = document.getElementById('matricula').value.trim(); // Quitar espacios en blanco
    const mensaje = document.getElementById('mensaje');
    
    // Lista de prefijos válidos
    const prefijosValidos = ['1584', '1684', '1784', '1884', '1984', '2084', '2184', '2284', '2384', '2484'];
    
    // Validar que la matrícula tenga 8 caracteres y comience con uno de los prefijos válidos
    const esValido = prefijosValidos.some(prefijo => matricula.startsWith(prefijo)) && matricula.length === 8;

    if (!esValido) {
        mensaje.textContent = 'Matrícula no válida.';
        mensaje.style.color = 'purple';
    } else {
        mensaje.textContent = 'El estudiante está inscrito.';
        mensaje.style.color = 'pink';
    }
});


