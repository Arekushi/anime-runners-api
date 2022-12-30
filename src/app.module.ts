import { CoreModule } from '@core/core.module';
import { RankingModule } from '@ranking/ranking.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

const ENV = process.env.NODE_ENV;

@Module({
    imports: [
        CoreModule,
        RankingModule,
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: !ENV ? '.env' : `.env.${ENV}`,
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
