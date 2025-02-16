Amigo Secreto

Este es un proyecto en JavaScript que permite gestionar una lista de amigos y sortear aleatoriamente un "amigo secreto" de manera sencilla y eficiente.

URL del Repositorio en GitHub

Puedes encontrar el código fuente en el siguiente enlace:


Instrucciones de Uso

Agregar amigos: Ingresa un nombre en el campo de entrada y presiona el botón "Agregar".

Validaciones: Se realizan verificaciones automáticas para asegurar que los datos ingresados sean correctos.

Lista de amigos: Se muestra en la interfaz la lista de amigos agregados.

Sortear amigo secreto: Al presionar el botón "Sortear", se selecciona aleatoriamente un amigo de la lista y se muestra en pantalla.

Funcionamiento del Código

Se inicializa un array vacío amigos para almacenar los nombres.

La función agregarAmigo():

Obtiene el nombre ingresado y elimina espacios en blanco innecesarios.

Valida que solo contenga letras para evitar datos incorrectos.

Verifica que el nombre no esté duplicado en la lista.

Agrega el nombre al array y actualiza la interfaz con la nueva lista.

La función actualizarLista():

Muestra la lista de amigos en la interfaz de usuario en tiempo real.

La función sortearAmigo():

Si la lista tiene al menos un amigo, selecciona uno de manera aleatoria y lo muestra en pantalla.

Mejoras y Modificaciones Realizadas

Evitar nombres duplicados:

Se implementó la validación if (amigos.includes(nombreAmigo)) para asegurar que cada nombre sea único.

Restringir la entrada a solo nombres válidos:

Se agregó la validación if (!/^[a-zA-Z]+$/.test(nombreAmigo)) para evitar el ingreso de números o caracteres especiales.

Tecnologías Utilizadas

HTML: Estructura del documento.

CSS: Estilos para mejorar la presentación visual.

JavaScript: Lógica de validación, manipulación del DOM y sorteo aleatorio.
