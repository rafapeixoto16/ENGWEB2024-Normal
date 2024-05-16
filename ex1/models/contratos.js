var mongoose = require("mongoose")

var contratosSchema = new mongoose.Schema({
    _id : String, // Sigla
    dataCelebracaoContrato: String,
    dataPublicacao : String,
    entidade_comunicante : String,
    fundamentacao : String,
    nAnuncio : String,
    NIPC_entidade_comunicante: String,
    objectoContrato : String, // path do ficheiro
    prazoExecucao : String,
    precoContratual : String,
    tipoprocedimento : String,
}, { versionKey: false })

module.exports = mongoose.model('contratos', contratosSchema)