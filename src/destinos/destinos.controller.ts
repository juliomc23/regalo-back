import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { DestinosService } from './destinos.service';
import { CreateDestinoDto } from './dto/create-destino.dto';
import { UpdateDestinoDto } from './dto/update-destino.dto';

@Controller('destinos')
export class DestinosController {
  constructor(private readonly destinosService: DestinosService) {}

  @Post()
  create(@Body() createDestinoDto: CreateDestinoDto) {
    return this.destinosService.create(createDestinoDto);
  }

  @Get()
  findAll() {
    return this.destinosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.destinosService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.destinosService.deleteOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body('fecha') updateDestinoDto: UpdateDestinoDto,
  ) {
    return this.destinosService.updateDestino(id, updateDestinoDto);
  }

  @Delete()
  deleteAll() {
    return this.destinosService.deleteMany();
  }
}
