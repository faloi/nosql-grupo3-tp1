// xviii. Eliminar el deporte RUGBY del socio con apellido “Valotta”.

db.socios.update(
	{ apellido: "Valotta" },
	{ $pull: { deportes: "RUGBY" } }
);