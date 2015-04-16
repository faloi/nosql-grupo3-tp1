//vi. Obtener todos los documentos con todos sus atributos donde en las cuotas su vencimiento sea “01/02/2014”.
db.socios.find({ "cuotas.fecha_emision": new Date(2014, 2, 1) });