// xvii. Insertar un nuevo socio que practicará dos deportes RUGBY y GOLF
// con los siguientes datos y con la cuota 10 con iguales valores del punto
// anterior y Fecha de Pago “03/09/2014”. Los datos del socio son nro
// 155155, apellido Valotta, nombre Emiliano, dni 28333333 y dirección
// Conde 454 CABA.

db.socios.insert({
	nro_socio: 155155,
	nombre: "Emiliano",
	apellido: "Valotta",
	dni: 28333333,
	direccion: "Conde 454 - CABA",
	deportes: ["RUGBY", "GOLF"],
	cuotas: [{
		nro_cuota: 10,
		fecha_emision: new Date(2014, 9, 1),
		fecha_vencimiento: new Date(2014, 9, 10),
		importe: 140,
		fecha_pago: new Date(2014, 9, 3)
	}]	
});