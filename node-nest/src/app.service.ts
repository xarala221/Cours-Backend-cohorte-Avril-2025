import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bonjour la Team';
  }

  aPropos(): string {
    return 'A propos de nous';
  }
}
