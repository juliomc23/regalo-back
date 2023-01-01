import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDestinoDto } from './dto/create-destino.dto';
import { UpdateDestinoDto } from './dto/update-destino.dto';
import { Destino } from './entities/destino.entity';

@Injectable()
export class DestinosService {
  constructor(
    @InjectModel(Destino.name)
    private readonly destinoModel: Model<Destino>,
  ) {}

  create(createDestinoDto: CreateDestinoDto) {
    return this.destinoModel.create(createDestinoDto);
  }

  findAll() {
    return this.destinoModel.find();
  }

  async findOne(mongoId: string) {
    const destino = await this.destinoModel.findById(mongoId);
    return destino;
  }

  async deleteOne(mongoId: string) {
    return this.destinoModel.deleteOne({ _id: mongoId });
  }

  async updateDestino(id: string, updateDestinoDto: UpdateDestinoDto) {
    const destino = await this.destinoModel.findOne({ _id: id });

    // console.log({ ...destino, updateDestinoDto });

    try {
      await destino.updateOne(updateDestinoDto);
      return { destino, updateDestinoDto };
    } catch (error) {
      console.error(error);
    }
  }

  deleteMany() {
    return this.destinoModel.deleteMany();
  }
}
