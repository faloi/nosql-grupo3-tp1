//xii. Actualizar los documentos que cumplan con la condición del punto ix incorporando en los mismos un nuevo atributo “codigoInterno” con valor 1001.
db.socios.update(
	{ nro_socio: { $gt: 3 }, "cuotas.fecha_emision": { $gte: new Date(2014, 1, 1) } },
	{ $set: { codigoInterno: 1001 } },
	{ multi: true }
);