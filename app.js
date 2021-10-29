const express = require("express");

const bodyParser = require("body-parser");

const app = express();


 app.set("port", 3030);

//require ("./src/routes/ciudades")(app);

//require("./src/routes/alturas")(app);

//require("./src/routes/banios")(app);

//require("./src/routes/cochera")(app);

//require("./src/routes/pileta")(app);

require("./src/routes/jardin")(app);




//app.listen(PORT, () => {
//console.log(`La app está corriendo en el puerto ${PORT}`);
//});

app.listen(app.get("port"),()=>{
  console.log("fumciona" + app.get("port"));
});