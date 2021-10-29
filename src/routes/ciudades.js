const connection = require("./connection");


module.exports = function(app){


app.get("/", (req, res) => {
    const consulta = "SELECT * FROM ciudad";
  
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

  