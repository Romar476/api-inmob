const express = require( 'express' )
const { postLogin } = require( '../controllers/login' )
const { getPropiedades, postPropiedades, putPropiedades, deletePropiedades } = require('../controllers/propiedades')

const router = express.Router()

    router.route( '/paneldeadministracion' )
        .post( postLogin )

    router.route( '/gestordepropiedades' )
        .get( getPropiedades )
        .post( postPropiedades )
        .put( putPropiedades )

    router.route( '/gestordepropiedades/id/:_id' )
        .delete( deletePropiedades )

    router.all( '*' , ( req , res , next ) => {
        const err = new Error()
            err.status = 404
            err.statusText = `No se encuentra el Endpoint`
        next( err )
    } )

    router.use( ( err , req , res , next ) => {
        let { status , statusText } = err
            status = status || 500
            statusText = statusText || `Error interno en la API`
        res.status( status ).json( { status , statusText } )
    } )

module.exports = { router }