import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

@ApiTags('App')
@Controller()
export class AppController {

    @Get('/ping')
    @ApiOperation({ summary: 'Ping application' })
    @ApiResponse({ status: 200, description: 'Pong ;)' })
    ping(): any {
        return {
            result: 'pong'
        }
    }
}
