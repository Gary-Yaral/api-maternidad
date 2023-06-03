require("dotenv").config()
const { app} = require("./app/index");
const { codifyPass } = require("./app/utils/handlePassword");
const PORT = process.env.PORT || 3000
const clave = codifyPass("Maternidad_2023")
console.log(clave);

app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
})
