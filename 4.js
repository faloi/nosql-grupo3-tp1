//iv. Obtener todos los apellidos y nombres de los socios que practican RUGBY.
db.socios.find({ deportes: "RUGBY" }, {_id: 0, nombre: 1, apellido: 1});