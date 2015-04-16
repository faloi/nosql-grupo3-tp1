// xvi. Actualice la/las agregando una nueva cuota para cada uno de los socios, con los siguientes datos:
// Nro_cuota     Fecha Emision       Fecha Vencimiento    Importe
// 10			  01/09/2014		  10/09/2014		   410

db.socios.update(
	{},
	{ $push: { cuotas: { 
		nro_cuota: 10,
		fecha_emision: new Date(2014, 9, 1),
		fecha_vencimiento: new Date(2014, 9, 10),
		importe: 140
	} } },
	{ multi: true }
);