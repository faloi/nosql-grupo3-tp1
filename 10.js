//x. Idem consulta anterior, pero sólo mostrar los atributos apellido, nombre y dni.
db.socios.find(
	{ nro_socio: { $gt: 3 }, "cuotas.fecha_emision": { $gte: new Date(2014, 1, 1) } },
	{ _id: 0, apellido: 1, nombre: 1, dni: 1 }
).pretty();