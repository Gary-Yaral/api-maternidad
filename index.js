require("dotenv").config()
const { app} = require("./app/index");
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
})