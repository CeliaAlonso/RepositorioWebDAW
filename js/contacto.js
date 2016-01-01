/*
 *    Autor = Celia Alonso, Raul Marin, Ricardo Salido, David Gomez
 *    Fecha = 10/12/2015
 *    Licencia = GPL v3
 *    Versión = 1.0
 *    Descripción = Definiciones CSS
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

function habilitarCondiciones() {
	
	var nombre = document.getElementById("nombre").value; 
	var apellido1 = document.getElementById("apellido1").value; 
	var apellido2 = document.getElementById("apellido2").value; 
	var email = document.getElementById("email").value; 
	
}

function habilitarTema() {
	
	var tipo_asunto = document.getElementById("asunto_tipo").value; 
	
	if (tipo_asunto !="") {
		
		document.getElementById("asunto_tema").disabled=false; 
		
	}
	
}