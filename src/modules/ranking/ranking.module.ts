import { CoreModule } from '@core/core.module';
import { Module } from '@nestjs/common';

import { MatchesService } from '@ranking/services/matches.service';
import { MatchesController } from '@ranking/controllers/matches.controller';

@Module({
    imports: [
        CoreModule
    ],
    controllers: [
        MatchesController
    ],
    providers: [
        MatchesService
    ],
})
export class RankingModule {}
