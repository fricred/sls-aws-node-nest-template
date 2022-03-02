import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  getHelloFromLibrary(): string {
    return 'Hello World! from library';
  }
}
