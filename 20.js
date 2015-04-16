//xx. Agregar los deportes GOLF y TENNIS a los socios con apellido “Malvasi”.

db.socios.update(
	{ apellido: "Malvasi" },
	{ $pushAll: { deportes: ["GOLF", "TENNIS"] } },
	{ multi: true }
);		