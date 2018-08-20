const fastify = require('fastify')()

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen(9000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
