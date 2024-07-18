const { Usuario } = require( './../models/models' )


const postLogin = async ( req , res , next ) => {

    try {
        const { user , pass } = req.body
        const buscar = await Usuario.findOne( { user , pass } )
        buscar ? res.json( { login : true } ) : res.json( { login : false } )
    } catch (error) {
        next( { statusText : error.message } )
    }
}

module.exports = { postLogin }