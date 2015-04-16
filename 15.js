var fechaPagoToString = function (date) {
	return date == null? "Sin pagar" : [date.getDay(), date.getMonth(), date.getFullYear()].join("/");
}

var printCuota = function (cuota) {
	print("Nro Cuota: " +  cuota.nro_cuota + " Fecha Pago: " + fechaPagoToString(cuota.fecha_pago));
};

var printSocio = function (socio) {
	print("Nro.: " + socio.nro_socio + " Ape. y Nom.: " + socio.apellido + ", " + socio.nombre);
	socio.cuotas.forEach(printCuota);
	print();
};

db.socios.find().forEach(printSocio);