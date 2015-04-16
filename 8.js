//viii. Obtener los documentos de la colección que contenga los socios cuyo apellido comienza con ‘B’.
db.socios.find({ apellido: /^b/i });