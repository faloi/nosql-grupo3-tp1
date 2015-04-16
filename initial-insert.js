var socios = [{
	nro_socio: 112323,
	nombre: "Juan Cruz",
	apellido: "Biroccio",
	dni: 27787688,
	direccion: "Pje Bollini 778 - CABA",
	deportes: ["RUGBY"],
	cuotas: [{
		fecha_emision: new Date(2014, 1, 1),
		fecha_vencimiento: new Date(2014, 1, 10),
		importe: 325,
		fecha_pago: new Date(2014, 1, 7)
	}, {
		fecha_emision: new Date(2014, 2, 1),
		fecha_vencimiento: new Date(2014, 2, 10),
		importe: 325,
		fecha_pago: new Date(2014, 2, 6)
	}, {
		fecha_emision: new Date(2014, 3, 1),
		fecha_vencimiento: new Date(2014, 3, 10),
		importe: 325,
		fecha_pago: new Date(2014, 3, 7)		
	}, {
		fecha_emision: new Date(2014, 4, 1),
		fecha_vencimiento: new Date(2014, 4, 10),
		importe: 328		
	}]
}, {
	nro_socio: 113245,
	nombre: "Martina",
	apellido: "Pardo",
	dni: 25787777,
	direccion: "J. Newbery 4633 - CABA",
	deportes: ["HOCKEY S/ CESPED", "CESTO BALL"],
	cuotas: [{
		fecha_emision: new Date(2014, 1, 1),
		fecha_vencimiento: new Date(2014, 1, 10),
		importe: 325,
		fecha_pago: new Date(2014, 1, 5)
	}, {
		fecha_emision: new Date(2014, 2, 1),
		fecha_vencimiento: new Date(2014, 2, 10),
		importe: 325
	}]	
}, {
	nro_socio: 114536,
	nombre: "Miguel",
	apellido: "Suparo",
	dni: 23787399,
	direccion: "B. Mitre 987 9no A - CABA",
	deportes: ["RUGBY", "TENNIS"],
	cuotas: [{
		fecha_emision: new Date(2014, 1, 1),
		fecha_vencimiento: new Date(2014, 1, 10),
		importe: 275,
		fecha_pago: new Date(2014, 1, 8)
	}, {
		fecha_emision: new Date(2014, 2, 1),
		fecha_vencimiento: new Date(2014, 2, 10),
		importe: 275,
		fecha_pago: new Date(2014, 2, 4)
	}, {
		fecha_emision: new Date(2014, 3, 1),
		fecha_vencimiento: new Date(2014, 3, 10),
		importe: 275,
		fecha_pago: new Date(2014, 3, 9)
	}]
}, {
	nro_socio: 120778,
	nombre: "Soledad",
	apellido: "Malvasi",
	dni: 25373789,
	direccion: "Rojas 1123 11vo 10 - CABA",
	deportes: ["HOCKEY S/ CESPED"],
	cuotas: [{
		fecha_emision: new Date(2014, 1, 1),
		fecha_vencimiento: new Date(2014, 1, 10),
		importe: 275
	}]
}, {
	nro_socio: 121567,
	nombre: "Rodolfo",
	apellido: "Broggi",
	dni: 21667984,
	direccion: "J. B. Justo 6557 - CABA",
	deportes: ["RUGBY", "TENNIS"],
	cuotas: [{
		fecha_emision: new Date(2014, 1, 1),
		fecha_vencimiento: new Date(2014, 1, 10),
		importe: 325,
		fecha_pago: new Date(2014, 1, 6)
	}, {
		fecha_emision: new Date(2014, 2, 1),
		fecha_vencimiento: new Date(2014, 2, 10),
		importe: 325
	}]	
}];

db.socios.remove();
db.socios.insert(socios);