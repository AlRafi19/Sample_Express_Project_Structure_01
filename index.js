/*

Starting File

*/

const app = require("./app");
const dotEnv= require("dotenv")
dotEnv.config({path:"./.env"})

const port = process.env.Running_Port

app.listen(port,()=>{
    console.log(`Server runs at ${port}`);
})