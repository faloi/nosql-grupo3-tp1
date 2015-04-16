// xix. Agregar deporte GOLF a los socios con 112323 y 114536.

db.socios.update(
	{ nro_socio: { $in: [112323, 114536] } },
	{ $push: { deportes: "GOLF" } },
	{ multi: true }
);