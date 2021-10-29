const connection = require("./connection");


module.exports = function(app){


app.get("/", (req, res) => {
    const { ciudad, calle, altura } = req.params;
    /*res.send("calle " + calle + " altura " + altura);  */
    
  const consulta = `SELECT altura.precio_metro 
  FROM calle, altura, ciudad
  WHERE calle.id_calle = altura.id_calle
  AND calle.id_ciudad = ciudad.id_ciudad
  AND UPPER(ciudad.nombre) LIKE UPPER("%${ciudad}%")
  
  AND UPPER(calle.nombre) LIKE UPPER("%${calle}%") 
  AND ${altura} BETWEEN altura.altura_minima AND altura.altura_maxima
  `;

  connection.query(consulta, (error, resultados) => {
    if (error) throw error;
    if (resultados.length > 0) {
      res.json(resultados);
    } else {
      res.send("No hay datos");
    }
  });
});
}