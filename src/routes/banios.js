const connection = require("./connection");


module.exports = function(app){

  // cantidad debe cargarse desde la app
const cantidad = 0;
app.get('/', (req, res)=>{
  const {banio} = req.params;
    const consulta = `SELECT coef_banio FROM banio WHERE cantidad = ${cantidad}`
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


