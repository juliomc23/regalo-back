import { Module } from '@nestjs/common';
import { DestinosService } from './destinos.service';
import { DestinosController } from './destinos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Destino, DestinoSchema } from './entities/destino.entity';

@Module({
  controllers: [DestinosController],
  providers: [DestinosService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Destino.name,
        schema: DestinoSchema,
      },
    ]),
  ],
})
export class DestinosModule {}
