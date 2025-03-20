import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  getCard(name: string): string {
    const filePath = join(__dirname, '..', 'src/html/card', 'card.html');
    let cardHtml = readFileSync(filePath, 'utf8');
    cardHtml = cardHtml.replace('JOHN DOE', name || 'JOHN DOE');
    return cardHtml;
  }
}
