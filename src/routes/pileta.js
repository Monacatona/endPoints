
const connection = require("./connection");

module.exports = function(app){


app.get('/', (req, res)=>{
    const cantidad = 0;
    const {cantidad} = req.params;
    const consulta = `SELECT coef_pileta FROM pileta WHERE cantidad = ${cantidad}`
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

