db.socios.insert({nro_socio : 155155,
    nombre : "Emiliano",
    apellido : "Valotta",
    dni : 28333333,
    direccion : "Conde 454 - CABA",
    deportes : [ 
        {
            nombre : "Rugby"
        }, 
        {
            nombre : "Golf"
        }
    ],
    cuotas : [ 
        {
            numero : 10,
            fechaEmision : ISODate("2014-09-01 00:00:00.000Z"),
            fechaVencimiento : ISODate("2014-09-10 00:00:00.000Z"),
            importe : 410,
            fechaPago : ISODate("2014-09-03 00:00:00.000Z")
        }]
}
);