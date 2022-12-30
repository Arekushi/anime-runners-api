import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

    @Get('/ping')
    ping(): any {
        return {
            result: 'pong'
        }
    }
}
