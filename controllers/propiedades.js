const { Propiedades } = require( './../models/models' )

const getPropiedades = async ( req , res , next ) => {
    const buscar = await Propiedades.find()
    res.json( buscar )
}

const postPropiedades = async ( req , res , next ) => {
    try {
        const { referencia , cintillo , titulo_corto , titulo_largo , subtitulo , zona , descripcion_corta , descripcion_larga , descripcion_larga1 , descripcion_larga2 , descripcion_larga3 , descripcion_larga4 , descripcion_larga5 , descripcion_larga6 , descripcion_larga7 , descripcion_larga8 , precio , habitaciones , banos , construido , terraza , parcela , jardin , piscina , garaje , imagenes } = req.body
        const nueva = new Propiedades( { referencia , cintillo , titulo_corto , titulo_largo , subtitulo , zona , descripcion_corta , descripcion_larga , descripcion_larga1 , descripcion_larga2 , descripcion_larga3 , descripcion_larga4 , descripcion_larga5 , descripcion_larga6 , descripcion_larga7 , descripcion_larga8 , precio , habitaciones , banos , construido , terraza , parcela , jardin , piscina , garaje , imagenes } )
        await nueva.save()
        const buscar = await Propiedades.find()
        res.json( buscar )    
    } catch (error) {
        next( { statusText : error.message } )
    }
}

const putPropiedades = async ( req , res , next ) => {
    try {
        const { _id , ...datos } = req.body
        await Propiedades.findByIdAndUpdate( _id , datos )
        const buscar = await Propiedades.find()
        res.json( buscar )    
    } catch (error) {
        next( { statusText : error.message } )
    }
}

const deletePropiedades = async ( req , res , next ) => {
    const { _id } = req.params
    await Propiedades.findByIdAndDelete( _id )
    const buscar = await Propiedades.find()
    res.json( buscar )
}

module.exports = { getPropiedades , postPropiedades , putPropiedades , deletePropiedades }