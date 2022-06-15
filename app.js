const fastify = require ('fastify')

const fastifySwagger = require('@fastify/swagger')

const {todoRoutes} = require('./routes/todo')


const build = (opts={}, optsSwagger={}) => {
    
    const app = fastify(opts)
    app.register(fastifySwagger,optsSwagger)
    app.register(todoRoutes)
    return app
}

module.exports = {build}