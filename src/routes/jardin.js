const connection = require("./connection");

module.exports = function(app){
const cantidad = 1;

app.get('/', (req, res)=>{
    //const {cantidad} = req.params;
    const consulta = `SELECT coef_jardin FROM jardin WHERE cantidad = ${cantidad}`
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