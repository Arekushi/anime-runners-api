import { CoreModule } from '@core/core.module';
import { Module } from '@nestjs/common';

import { MatchService } from '@ranking/services/match.service';
import { MatchController } from '@ranking/controllers/match.controller';

@Module({
    imports: [
        CoreModule
    ],
    controllers: [
        MatchController
    ],
    providers: [
        MatchService
    ],
})
export class RankingModule {}
