var personas = [
{
    "nro_socio" : 112323,
    "nombre" : "Juan Cruz",
    "apellido" : "Biroccio",
    "dni" : 27787688,
    "direccion" : "Pje Bollini 778 - CABA",
    "deportes" : [ 
        {
            "nombre" : "Rugby"
        }
    ],
    "cuotas" : [ 
        {
            "numero" : 1,
            "fechaEmision" : ISODate("2014-01-01T00:00:00.000Z"),
            "fechaVencimiento" : ISODate("2014-01-10T00:00:00.000Z"),
            "importe" : 325,
            "fechaPago" : ISODate("2014-01-07T00:00:00.000Z")
        }, 
        {
            "numero" : 2,
            "fechaEmision" : ISODate("2014-02-01T00:00:00.000Z"),
            "fechaVencimiento" : ISODate("2014-02-10T00:00:00.000Z"),
            "importe" : 325,
            "fechaPago" : ISODate("2014-02-06T00:00:00.000Z")
        }, 
        {
            "numero" : 3,
            "fechaEmision" : ISODate("2014-03-01T00:00:00.000Z"),
            "fechaVencimiento" : ISODate("2014-03-10T00:00:00.000Z"),
            "importe" : 325,
            "fechaPago" : ISODate("2014-03-06T00:00:00.000Z")
        }, 
        {
            "numero" : 4,
            "fechaEmision" : ISODate("2014-04-01T00:00:00.000Z"),
            "fechaVencimiento" : ISODate("2014-04-10T00:00:00.000Z"),
            "importe" : 358
        }
    ]
},{
    "nro_socio" : 113245,
    "nombre" : "Martina",
    "apellido" : "Pardo",
    "dni" : 25787777,
    "direccion" : "J. Newbery 4633 - CABA",
    "deportes" : [ 
        {
            "nombre" : "Hockey S/Cesped"
        }, 
        {
            "nombre" : "Cesto Ball"
        }
    ],
    "cuotas" : [ 
        {
            "numero" : 1,
            "fechaEmision" : ISODate("2014-01-01T00:00:00.000Z"),
            "fechaVencimiento" : ISODate("2014-01-10T00:00:00.000Z"),
            "importe" : 325,
            "fechaPago" : ISODate("2014-01-05T00:00:00.000Z")
        }, 
        {
            "numero" : 2,
            "fechaEmision" : ISODate("2014-02-01T00:00:00.000Z"),
            "fechaVencimiento" : ISODate("2014-02-10T00:00:00.000Z"),
            "importe" : 325
        }
    ]
},{
    "nro_socio" : 114536,
    "nombre" : "Miguel",
    "apellido" : "Suparo",
    "dni" : 23787399,
    "direccion" : "B. Mitre 987 9no A - CABA",
    "deportes" : [ 
        {
            "nombre" : "Rugby"
        }, 
        {
            "nombre" : "Tennis"
        }
    ],
    "cuotas" : [ 
        {
            "numero" : 1,
            "fechaEmision" : ISODate("2014-01-01T00:00:00.000Z"),
            "fechaVencimiento" : ISODate("2014-01-10T00:00:00.000Z"),
            "importe" : 275,
            "fechaPago" : ISODate("2014-01-08T00:00:00.000Z")
        }, 
        {
            "numero" : 2,
            "fechaEmision" : ISODate("2014-02-01T00:00:00.000Z"),
            "fechaVencimiento" : ISODate("2014-02-10T00:00:00.000Z"),
            "importe" : 275,
            "fechaPago" : ISODate("2014-02-04T00:00:00.000Z")
        }, 
        {
            "numero" : 3,
            "fechaEmision" : ISODate("2014-03-01T00:00:00.000Z"),
            "fechaVencimiento" : ISODate("2014-03-10T00:00:00.000Z"),
            "importe" : 275,
            "fechaPago" : ISODate("2014-03-09T00:00:00.000Z")
        }
    ]
},{
    "nro_socio" : 120778,
    "nombre" : "Soledad",
    "apellido" : "Malvasi",
    "dni" : 25373789,
    "direccion" : "Rojas 1123 11vo 10 - CABA",
    "deportes" : [ 
        {
            "nombre" : "Hockey S/Cesped"
        }
    ],
    "cuotas" : [ 
        {
            "numero" : 1,
            "fechaEmision" : ISODate("2014-01-01T00:00:00.000Z"),
            "fechaVencimiento" : ISODate("2014-01-10T00:00:00.000Z"),
            "importe" : 275
        }
    ]
},{
    "nro_socio" : 121567,
    "nombre" : "Rodolfo",
    "apellido" : "Broggi",
    "dni" : 21667987,
    "direccion" : "Juan B. Justo 6557 - CABA",
    "deportes" : [ 
        {
            "nombre" : "Rugby"
        }, 
        {
            "nombre" : "Tennis"
        }
    ],
    "cuotas" : [ 
        {
            "numero" : 1,
            "fechaEmision" : ISODate("2014-01-01T00:00:00.000Z"),
            "fechaVencimiento" : ISODate("2014-01-10T00:00:00.000Z"),
            "importe" : 325,
            "fechaPago" : ISODate("2014-01-06T00:00:00.000Z")
        }, 
        {
            "numero" : 2,
            "fechaEmision" : ISODate("2014-02-01T00:00:00.000Z"),
            "fechaVencimiento" : ISODate("2014-02-10T00:00:00.000Z"),
            "importe" : 325
        }
    ]
}
];
db.socios.insert(personas);