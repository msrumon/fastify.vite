import type { FastifyInstance } from 'fastify';

export const main = async (fastify: FastifyInstance) => {
  fastify.get('/', async (_request, reply) => reply.html());
};

export const api = async (fastify: FastifyInstance) => {
  fastify.get('/', async (request, reply) => {
    return await reply.send('Hello, world!');
  });
};
