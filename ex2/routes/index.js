var express = require('express');
var router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get('/', function(req, res, next) {
  var d = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:16000/contratos")
      .then(resp =>{
        var contratos = resp.data
        res.status(200).render("contratoList",{"Contratos":contratos,"Date":d})
      }).catch(erro =>{
    res.status(503).render("error",{"error":erro})
  })
});


router.get("/:idC",function (req, res, next){
  var d = new Date().toISOString().substring(0, 16)
  var id = req.params.idC
  axios.get("http://localhost:16000/contratos/"+id)
      .then(resp =>{
        let contrato = resp.data
        res.status(200).render("contratoPage",{"contrato":contrato,"Data":d})
      }).catch(erro =>{
    res.status(503).render("error",{"error":erro})
  })
})


module.exports = router;
