import { ApiKeyAuthGuard } from '@core/guards/apikey.guard';
import { MatchRequest } from '@ranking/requests/match.request';
import { MatchesService } from '@ranking/services/matches.service';
import { Controller, Post, Get, Query, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { ValidationPipe, UseGuards } from '@nestjs/common';
import { UsePipes } from '@nestjs/common';
import { MatchResponse } from '@ranking/response/match.response';

@Controller("matches")
export class MatchesController {

    constructor(
        public service: MatchesService
    ) { }

    @Post('/register-match')
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @UseGuards(ApiKeyAuthGuard)
    async registerMatch(
        @Body() match: MatchRequest
    ): Promise<void> {
        await this.service.postMatch(match);
    }

    @Get('/top')
    async getTop(
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number
    ): Promise<MatchResponse[]> {
        return await this.service.getTop(limit);
    }
}
