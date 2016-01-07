/*
 *    Autor = Celia Alonso, Raul Marin, Ricardo Salido, David Gomez
 *    Fecha = 10/12/2015
 *    Licencia = GPL v3
 *    Versión = 1.0
 *    Descripción = Comprobaciones y validaciones para el formulario de CONTACTO 
 *
 *    Copyright (C) 2015 Buscando a Nemo
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// Función: Habilitar el botón de enviar
function habilitarBotonEnviar() {

	var condiciones = document.getElementById("condiciones");
	var enviar = document.getElementById("enviar_contacto");
	var camposValidados = habilitarCondiciones();

	// Si el checkbox de condiciones está checkeado, se habilitará el botón de
	// enviar
	if (camposValidados && condiciones.checked == true) {

		enviar.disabled = false;

		// En caso contrario, deshabilitará el botón de enviar
	} else {

		enviar.disabled = true;
	}

}

// Función: Habilitar el checkbox de aceptación de condiciones de privacidad
function habilitarCondiciones() {

	// Si todas las validaciones de todos los campos son correctas, habilitará
	// el checkbox de condiciones
	if (validarNombreOApellido("nombre") && validarNombreOApellido("apellido1")
			&& validarNombreOApellido("apellido2") && validarEmail()
			&& validarMovil() && comprobarAsunto() && validarMensaje()) {

		document.getElementById("condiciones").disabled = false;
		return true;

		// En caso contrario, deshabilitará el checkbox de condiciones
	} else {

		document.getElementById("condiciones").checked = false;
		document.getElementById("condiciones").disabled = true;
		return false;

	}

}

// Función: Comprueba si el campo está vacío
function comprobarRelleno(campo, mostrar) {

	// La variable nombre tendrá como valor el valor de la variable campo
	var nombre = document.getElementById(campo).value;
	// La variable scampo tendrá como valor el id del input campo
	var scampo = "s" + campo;

	// Si el input no tiene nada, añadirá un mensaje
	if (nombre == "") {

		document.getElementById(scampo).innerHTML = "El campo " + mostrar
				+ " no puede estar vacío";

	} else {

		document.getElementById(scampo).innerHTML = "";

	}

}

// Función: Valida si el campo nombre o apellido es correcto
function validarNombreOApellido(campo) {

	// La variable nombre tendrá como valor el valor de la variable campo
	var nombre = document.getElementById(campo).value;
	// La variable exprRegular contiene la expresión regular que validará el
	// campo nombre
	var expRegular = /^[A-Za-zÁÉÍÓÚáéíóú ]{1,30}/;
	// La variable scampo tendrá como valor el id del input campo
	var scampo = "s" + campo;
	var mostrar = "";

	switch (campo) {
	case "nombre":

		mostrar = "'Nombre'";

		break;
	case "apellido1":

		mostrar = "'Primer Apellido'"

		break;
	case "apellido2":

		mostrar = "'Segundo Apellido'"

		break;
	}

	// Si nombre cumple la expresión regular, devolverá true
	if (expRegular.test(nombre)) {

		return true;

		// En los casos contrarios, mostrará un mensaje indicando al usuario el
		// error y devolviendo false
	} else if (nombre == "") {

		comprobarRelleno(campo, mostrar);

	} else {

		document.getElementById(scampo).innerHTML = "El campo " + mostrar
				+ " sólo puede contener caracteres";

	}

	return false;

}

// Función: Valida si el campo email es correcto
function validarEmail() {

	// La variable email tendrá como valor el valor del campo email
	var email = document.getElementById("email").value;
	// La variable exprRegular contiene la expresión regular que validará el
	// campo email
	var expRegular = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w*)*/;
	// La variable scampo tendrá como valor el id del input email
	var scampo = "semail"; 

	// Si email cumple la expresión regular, devolverá true
	if (expRegular.test(email)) {

		return true;

		// En los casos contrarios, mostrará un mensaje indicando al usuario el
		// error y devolviendo false
	} else if (email == "") {

		comprobarRelleno("email", "Correo electrónico");

	} else {

		document.getElementById(scampo).innerHTML ="El campo 'Correo electrónico' tiene el siguiente formato ejemplo@ejemplo.ejemplo";

	}

	return false;

}

// Función: Valida si el campo fijo es correcto
function validarFijo() {

	// La variable fijo tendrá como valor el valor del campo fijo
	var fijo = document.getElementById("fijo").value;
	// La variable exprRegular contiene la expresión regular que validará el
	// campo fijo
	var expRegular = /^(9)\d{8}$/;
	// La variable scampo tendrá como valor el id del input fijo
	var scampo = "sfijo"; 

	// Si fijo cumple la expresión regular, devolverá true
	if (expRegular.test(fijo)) {

		return true;

		// En los casos contrarios, mostrará un mensaje indicando al usuario el
		// error y devolviendo false
	} else if (fijo.length != 9) {

		document.getElementById(scampo).innerHTML ="El campo 'Teléfono fijo' tiene que tener una longitud de 9 caracteres";

	} else if (!expRegular.test(fijo)){

		document.getElementById(scampo).innerHTML ="El campo 'Teléfono fijo' sólo puede contener caracteres numéricos";

	}

}

// Función: Valida si el campo movil es correcto
function validarMovil() {

	// La variable movil tendrá como valor el valor del campo movil
	var movil = document.getElementById("movil").value;
	// La variable exprRegular contiene la expresión regular que validará el
	// campo movil
	var expRegular = /^(6)\d{8}$/;
	// La variable scampo tendrá como valor el id del input movil
	var scampo = "smovil"; 

	// Si movil cumple la expresión regular, devolverá true
	if (expRegular.test(movil)) {

		return true;

		// En los casos contrarios, mostrará un mensaje indicando al usuario el
		// error, vaciando el campo y devolviendo false
	} else if (movil == "") {

		comprobarRelleno("movil", "Teléfono móvil");

	} else if (movil.length != 9) {

		document.getElementById(scampo).innerHTML ="El campo 'Teléfono móvil' tiene que tener una longitud de 9 caracteres";

	} else {

		document.getElementById(scampo).innerHTML ="El campo 'Teléfono móvil' sólo puede contener caracteres numéricos";

	}

	return false;

}

// Función: Comprueba si los campos select de asunto están seleccionados
// correctamente
function comprobarAsunto() {

	// La variable tipo_asunto tendrá como valor el valor del campo asunto_tipo
	var tipo_asunto = document.getElementById("asunto_tipo").value;
	// La variable tema_asunto tendrá como valor el valor del campo asunto_tema
	var tema_asunto = document.getElementById("asunto_tema").value;

	// Si los valores están rellenados signficará que estará marcado cualquier
	// valor distinto al primero de la lista por lo que devolveremos true
	if (tipo_asunto != "" && tema_asunto != "") {

		return true;

	}

	return false;

}

// Función: Comprueba si el campo mensaje está rellenado
function validarMensaje() {

	// La variable mensaje tendrá como valor el valor del campo mensaje
	var mensaje = document.getElementById("mensaje").value;
	// La variable scampo tendrá como valor el id del textarea mensaje
	var scampo = "smensaje"; 

	// Si el campo mensaje no tiene nada introducido, devolverá false. En caso
	// contrario, devolverá true
	if (mensaje != "") {

		return true;

	}

	document.getElementById(scampo).innerHTML ="Tiene que escribir un mensaje en el campo 'Mensaje'";
	return false;

}

// Función: Habilitar el tema del campo 'Asunto'
function habilitarTema() {

	// La variable tipo_asunto tendrá como valor el valor del campo asunto_tipo
	var tipo_asunto = document.getElementById("asunto_tipo").value;

	// Si el valor de la variable tipo_asunto tiene un valor, habilitará el
	// campo donde se eligirá el tema
	if (tipo_asunto != "") {

		document.getElementById("asunto_tema").disabled = false;

		// En caso contrario, deshabilitará dicho campo
	} else {

		document.getElementById("asunto_tema").selectedIndex = "0";
		document.getElementById("asunto_tema").disabled = true;

	}

}