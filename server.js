import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
// Note o `./dist/src` neste import!
// Precisamos apontar para o arquivo buildado, usando 
// caminhos relativos!
import { AppModule } from './dist/src/app.module';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors();
  
  await app.init();
  return server;
}

// Precisamos exportar uma função default, para que 
// a Vercel reconheça o ponto de entrada da serverless 
// function.
// 
// Isso será executado TODA vez que algum acesso ocorrer 
// em sua aplicação (não é diferente de quando apontamos 
// para `main.ts`, pois ocorre o mesmo).
export default async function handler(req, res) {
  try {
    const serverInstance = await bootstrap();
    serverInstance(req, res);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}