const mongoose = require('mongoose')
var Contratos = require("../models/contratos")

module.exports.list = () => {
    return Contratos
        .find()
        .exec()
}

module.exports.findById = id => {
    return Contratos
        .findOne({_id : id})
        .exec()
}

module.exports.findByEntidade = entidadeId => {
    return Contratos
        .find({entidade_comunicante : entidadeId})
        .exec()
}

module.exports.findByTipo = tipoID => {
    return Contratos
        .find({tipoprocedimento : tipoID})
        .exec()
}

module.exports.count = () => {
    return Contratos
        .countDocuments().exec()
}

module.exports.findEntidades = () => {
    return Contratos
        .find({},{"entidade_comunicante": 1,"NIPC_entidade_comunicante": 1, "_id": 0})
        .distinct("entidade_comunicante")
        .sort({"entidade_comunicante": 1}).exec()

}

module.exports.findTipos = () => {
    return Contratos
        .find({},{"tipoprocedimento": 1, "_id": 0})
        .distinct("tipoprocedimento")
        .sort({"tipoprocedimento": 1}).exec()
}

module.exports.insert = cont => {
    if((Contratos.find({_id : cont._id}).exec()).length !== 1){
        var newContrato = new Contratos(cont)
        return newContrato.save()
    }
}

module.exports.update = (id, cont) => {
    return Contratos
        .findByIdAndUpdate(id, cont, {new : true})
        .exec()
}

module.exports.remove = id => {
    return Contratos
        .findByIdAndDelete({_id : id})
        .exec()//retorna o objeto retornado
}