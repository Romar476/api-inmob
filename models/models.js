const mongoose = require( 'mongoose' )
const { usuarioSchema, propiedadesSchema } = require('../schema/schema')

const Usuario = mongoose.model( 'Usuario' , usuarioSchema )
const Propiedades = mongoose.model( 'Propiedades' , propiedadesSchema )

module.exports = { Usuario , Propiedades }