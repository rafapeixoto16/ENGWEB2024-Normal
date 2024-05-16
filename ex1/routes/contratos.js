var express = require('express');
var router = express.Router();
var Contrato = require("../controllers/contratos")
const fs = require("fs");


/* Listar as UC (R) */
router.get('/', function(req, res) {
    if (req.query.entidade) {
        Contrato.findByEntidade(req.query.entidade)
            .then(data => res.jsonp(data))
            .catch(erro => res.jsonp(erro))
    }
    else if (req.query.tipo) {
        Contrato.findByTipo(req.query.tipo)
            .then(data => res.jsonp(data))
            .catch(erro => res.jsonp(erro))
    } else {
        Contrato.list()
            .then(data => res.jsonp(data))
            .catch(erro => res.jsonp(erro))
    }
});

router.get('/entidades', function(req, res) {
    Contrato.findEntidades()
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});

router.get('/tipos', function(req, res) {
    Contrato.findTipos()
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});

/* Consultar uma UC (R) */
router.get('/:id', function(req, res) {
    Contrato.findById(req.params.id)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});

/* Criar uma UC (C) */
router.post('/', function(req, res) {
    const contratoC = {
        _id: req.body._id,
        dataCelebracaoContrato: req.body.dataCelebracaoContrato,
        dataPublicacao: req.body.dataPublicacao,
        entidade_comunicante: req.body.entidade_comunicante,
        fundamentacao : req.body.fundamentacao,
        nAnuncio : req.body.nAnuncio,
        NIPC_entidade_comunicante : req.body.NIPC_entidade_comunicante,
        objectoContrato:req.body.objectoContrato,
        prazoExecucao:req.body.prazoExecucao,
        precoContratual:req.body.precoContratual,
        tipoprocedimento:req.body.tipoprocedimento
    }

    Contrato.insert(contratoC)
        .then(data => {res.redirect("/contratos")})
        .catch(erro => res.jsonp(erro))
});

/* Alterar uma UC (U) */
router.put('/:id', function(req, res) {
    Contrato.update(req.params.id, req.body)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});

/* Remover uma UC (D ) */
router.delete('/:id', function(req, res) {
    Contrato.remove(req.params.id)
        .then(entrega =>{
            res.jsonp(entrega);
        })
        .catch(erro => res.jsonp(erro))
});


module.exports = router;
