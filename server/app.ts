import { resolve } from 'node:path';

import fastifyVite from '@fastify/vite';

import Fastify from 'fastify';

import { Env } from './env.enum';
import { api, main } from './routes';

const fastify = Fastify({ logger: true });

async function start() {
  try {
    await fastify.register(fastifyVite, {
      root: resolve(__dirname, '..'),
      dev: process.env.NODE_ENV !== Env.PROD,
    });
    await fastify.register(main);
    await fastify.vite.ready();
    await fastify.register(api, { prefix: '/api' });
    await fastify.ready();
    await fastify.listen({ port: 8080, host: '0.0.0.0' });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
}

start();
