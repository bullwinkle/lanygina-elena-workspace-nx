import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return ({ message: 'Hello API' });
  }

  getDbData(): { data: { message: string } } {
    return ({data : { message: 'Hello DB' }});
  }
}
