import { AuthModule } from './auth/auth.module';
import { receitaModule } from './receitas/receita.module';
import { PrismaService } from './database/prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { usuarioModule } from './usuario/usuario.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [receitaModule, AuthModule, usuarioModule, ThrottlerModule.forRoot({
    ttl : 60,
    limit : 10
  })],
  controllers: [AppController],
  providers: [PrismaService, 
  {
    provide : APP_GUARD,
    useClass : ThrottlerGuard   
  }
],
})
export class AppModule {}
