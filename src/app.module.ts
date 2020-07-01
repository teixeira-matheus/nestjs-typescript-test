import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './clientes/clientes.module';
import { ExperienciasModule } from './experiencias/experiencias.module';
import { AvaliacoesModule } from './avaliacoes/avaliacoes.module';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { LojasModule } from './lojas/lojas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ClientesModule,
    ExperienciasModule,
    AvaliacoesModule,
    ColaboradoresModule,
    LojasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
