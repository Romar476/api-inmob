const mongoose = require( 'mongoose' )

const usuarioSchema = new mongoose.Schema(
    { user : String , pass : String },
    { collection : 'usuarios' , versionKey : false }
)

const propiedadesSchema = new mongoose.Schema(
    { id : String , referencia : String , cintillo : String , titulo_corto : String , titulo_largo : String , subtitulo : String , zona : String , descripcion_corta : String , descripcion_larga : String , descripcion_larga1 : String , descripcion_larga2 : String , descripcion_larga3 : String , descripcion_larga4 : String , descripcion_larga5 : String , descripcion_larga6 : String , descripcion_larga7 : String , descripcion_larga8 : String , precio : String , habitaciones : String , banos : String , construido : String , terraza : String , parcela : String , jardin : String , piscina : String , garaje : String , imagenes : String },
    { collection : 'propiedades' , versionKey : false }
)

module.exports = { usuarioSchema , propiedadesSchema }