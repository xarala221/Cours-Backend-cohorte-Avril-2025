import { Injectable } from '@nestjs/common';

@Injectable()
export class TachesService {
  toutesLesTaches(): string[] {
    return ['Aller au marché', 'Manager', 'Bouger', 'Dormir'];
  }
}
