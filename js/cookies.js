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

function getCookie(nombre_cookie) {

	var i, x, y, arrayCookies = document.cookie.split(";");

	for (var i = 0; i < arrayCookies.length; i++) {

		x = arrayCookies[i].substr(0, arrayCookies[i].indexOf("="));
		y = arrayCookies[i].substr(arrayCookies[i].indexOf("=") + 1);
		x = x.replace(/^\s+|\s+$/g, "");

		if (x === nombre_cookie) {

			return decodeURIComponent(y);

		}

	}

}

function setCookie(nombre_cookie, valor) {

	var expiracionDias = 1;
	var fechaExpiracion = new Date();
	fechaExpiracion.setDate(fechaExpiracion.getDate() + expiracionDias);

	var valor_cookie = encodeURIComponent(valor)
			+ ((fechaExpiracion === null) ? "" : "; expires=" + fechaExpiracion.toUTCString());
	document.cookie = nombre_cookie + "=" + valor_cookie;

}

function checkCookie() {

	var usuario = getCookie("nombreUsuario");

	if (usuario != null && usuario != "") {

		document.getElementById("welcome").value = "Hola, " + usuario;

	} else {

		usuario = prompt("¡Bienvenido a Buscando a Nemo! /n ¿Cómo se llama?", "");

		if (usuario != null && usuario != "") {

			setCookie("nombreUsuario", usuario);

		}

	}

}