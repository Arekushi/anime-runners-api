import { ApiKeyAuthGuard } from '@core/guards/apikey.guard';
import { MatchRequest } from '@ranking/requests/match.request';
import { MatchService } from '@ranking/services/match.service';
import { Controller, Post, Get, Query, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { ValidationPipe, UseGuards } from '@nestjs/common';
import { UsePipes } from '@nestjs/common';
import { MatchResponse } from '@ranking/response/match.response';
import { ApiResponse } from '@nestjs/swagger';
import { ApiBody, ApiQuery, ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Match')
@Controller("match")
export class MatchController {

    constructor(
        public service: MatchService
    ) { }

    @Post('/register-match')
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @UseGuards(ApiKeyAuthGuard)
    @ApiOperation({ summary: 'Register Match time' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    @ApiResponse({ status: 201, description: 'Created' })
    @ApiHeader({ name: 'api-key' })
    @ApiBody({
        type: MatchRequest,
        description: 'Match Request',
        examples: {
            default: {
                summary: 'Test Body',
                description: 'JSON object just for testing',
                value: {
                    username: "test_username",
                    miliseconds_reached: 500
                } as MatchRequest
            }
        }
    })
    async registerMatch(
        @Body() match: MatchRequest
    ): Promise<void> {
        await this.service.postMatch(match);
    }

    @Get('/top')
    @ApiOperation({ summary: 'Returns top matches' })
    @ApiQuery({ name: 'limit', example: 10 })
    @ApiResponse({ status: 200, description: 'Returned top matches' })
    async getTop(
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number
    ): Promise<MatchResponse[]> {
        return await this.service.getTop(limit);
    }
}
