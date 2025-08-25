import { Controller, Get } from '@nestjs/common';

@Controller('taches')
export class TachesController {
  @Get()
  toutesLesTaches(): string[] {
    return ['Aller au marché', 'Manager', 'Bouger', 'Dormir'];
  }
}
