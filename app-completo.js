const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const PORT = 3030;

require ("./src/routes/ciudades")(app);




app.get("/ciudad/:id", (req, res) => {
  const { id } = req.params;

  const consulta = `SELECT * FROM ciudad WHERE id_Ciudad=${id}`;
  connection.query(consulta, (error, resultado) => {
    if (error) throw error;
    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      res.send("No hay un ID que matchee con la base");
    }
  });
});
app.post("/ciudades", (req, res) => {
  const consulta = `INSERT INTO ciudad SET ?`;

  const customObject = {
    nombre: req.body.name,
  };

  connection.query(consulta, customObject, (error) => {
    if (error) throw error;
    res.send("Se insertó el registro!");
  });
});

app.put("/ciudad/:id", (req, res) => {
  const {id} = req.params;
  const {name} = req.body;

  const consulta = `UPDATE ciudad SET nombre="${name}" WHERE id_ciudad=${id}`;
  connection.query (consulta, (error) => {
    if (error) throw error;
    res.send("Se actualizó la tabla!");
  });
});

app.delete("/ciudad/:id", (req, res) => {
  const { id } = req.params;

  consulta = `DELETE FROM ciudad WHERE id_ciudad=${id}`;
  connection.query(consulta, (error) => {
    if (error) throw error;
    res.send("Se eliminó el registro");
  });
});

app.listen(PORT, () => {
  console.log(`La app está corriendo en el puerto ${PORT}`);
});
