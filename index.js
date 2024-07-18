console.clear()
console.log( 'Iniciando JS' )

const express = require( 'express' ) // Importamos Express, Cors, Mongoose y el archivo router.js
const cors = require( 'cors' )
const mongoose = require( 'mongoose' )
const { router } = require('./router/router')

const PORT = process.env.PORT || 3000 // Al subir a Vercel, tendremos que definir las variables de entorno PORT y MONGO
const MONGO = process.env.MONGO || 'mongodb://127.0.0.1:27017/inmob'

const conectar = async () => mongoose.connect( MONGO ) // Vamos a conectar con la BBDD inmob
    .then( () => console.log( 'Conectando con MongoDB' ) ) // Este mensaje es para comprobar en la terminal que está conectando con nuestra BBDD
    .catch( err => console.log( err.message ) ) // En caso de que no conecte, nos muestra el error y su correspondiente mensaje

conectar() // Ejecutamos la función conectar

const app = express() // Ejecutamos Express

    app.use( cors() )
    app.use( express.json() )
    app.use( express.urlencoded( { extended : false } ) )
    app.use( router )

app.listen( PORT , () => console.log( 'Iniciando API' ) )