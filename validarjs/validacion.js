//iniciar validacion según carga la pagina
window.onload = iniciar;
function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}
//funciones genericas para verificar datos

function vacio(campo){
	if (campo.value == "") {
		alert("el campo "+campo.name+" no puede estar vacio");
		return false;
	}
	return true;
}

function nif(dni) {
  var numero
  var letr
  var letra
  var expresion_regular_dni
 
  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
  if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
       alert('Dni erroneo, la letra del NIF no se corresponde');
       return false;
     }else{
       
       return true;
     }
  }else{
     alert('Dni erroneo, formato no válido');
     return false;
   }
}

function correo(campo){
	regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if (regex.test(campo.value)) {
		return true;
	}else{
		alert("correo incorrecto");
		return false;
	}
}

//funciones especificas de validacion de datos

function validaDni(){
	var campo = document.getElementById("dni");
	if(vacio(campo) && nif(campo.value)){
		return true;
	}else{
		return false;
	}

}
function validaNombre(){
	var campo = document.getElementById("nombre");
	if (vacio(campo)){
		return true;
	}else{
		return false;
	}
	
}
function validaEdad(){
	var campo = document.getElementById("edad");
	var mayor = 18;
	if (vacio(campo) && campo.value >= mayor &&campo.value <=100 && !isNaN(campo.value)) {
		return true;
	}else{
		alert("la edad no es correcta");
		return false;
	}
}
function validarCorreo(){
	var campo = document.getElementById("correo");
	if(vacio(campo) && correo(campo)){
		return true;
	}else{
		return false;
	}
}
function validaFecha(){
	var campo = document.getElementById("fecha");
	if(vacio(campo)){
		return true;
	}else{
		return false;
	}
}
//resumen de validacion en la ultima funcion a pasar por el evento

function validar(e) {
    if (validaDni() && validaNombre() && validaEdad() && validarCorreo() && validaFecha()) {
    	alert("Se ha registrado su solicitud. Gracias por apuntarse.");
        return true;
    } else {
    	e.preventDefault();
        return false;
    }
}