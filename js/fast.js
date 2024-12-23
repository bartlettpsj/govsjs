import Fastify from "fastify";

const fastify = Fastify({
  logger: false,
});

const reqHandler = (request, reply) => {
  reply.send("Hello World!");
};

fastify.get("/", reqHandler);

fastify.listen({ port: 3001 });

console.log('Listening to http://localhost:3001');
