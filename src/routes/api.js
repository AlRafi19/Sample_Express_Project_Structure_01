


const express = require("express");
const helloController = require('../controllers/helloController');
const router = express.Router();


// Defining Router's End Point
router.get("/hello-get",helloController.hello);
router.post("/hello-post",helloController.hello2);


// Exporting Router to use In Other Files
module.exports=router;