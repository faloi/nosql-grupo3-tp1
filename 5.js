//v. Obtener los documentos en un array los próximos 5 documentos, a partir del documento 5.
db.socios.find().limit(5).skip(5).toArray();