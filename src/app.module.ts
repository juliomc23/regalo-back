import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DestinosModule } from './destinos/destinos.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://julio-admin:bc31Et2Vz4oJrufh@clusterbase.gpvnj.mongodb.net/regalo',
    ),
    DestinosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
