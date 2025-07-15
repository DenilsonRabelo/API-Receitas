import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('ReceitasController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

  });

  it('/receitas/todas (GET)', () => {
    return request(app.getHttpServer())
      .get('/receitas/todas')
      .expect(200)
      .expect((res) => {
        expect(res.body.items).toBeDefined();
        expect(Array.isArray(res.body.items)).toBe(true);
      });
  });

  it('/receitas/tipo/doce (GET)', () => {
    return request(app.getHttpServer())
      .get('/receitas/tipo/doce')
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeDefined();
        expect(Array.isArray(res.body)).toBe(true);
      });
  });

  it('/receitas/tipo/doce (GET) with invalid type', () => {
    return request(app.getHttpServer())
      .get('/receitas/tipo/invalido')
      .expect(400)
      .expect((res) => {
        expect(res.body).toBeDefined();
        expect(res.body.message).toBe('O tipo da receita deve ser doce, salgado ou agridoce');
      });
  });

  it('/receitas/ingredientes/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/receitas/ingredientes/1')
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeDefined();
      });
  });

  it('/receitas/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/receitas/1')
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeDefined();
        if (res.body && res.body.id) {
          expect(res.body.id).toEqual(1);
        }
      });
  });

  
  afterAll(async () => {
    await app.close();
  });
});


