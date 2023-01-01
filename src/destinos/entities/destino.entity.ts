import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Prop } from '@nestjs/mongoose/dist';
import { Document } from 'mongoose';

@Schema()
export class Destino extends Document {
  @Prop()
  destino: string;

  @Prop()
  fecha_entrada: string;
  @Prop()
  fecha_salida: string;
}

export const DestinoSchema = SchemaFactory.createForClass(Destino);
