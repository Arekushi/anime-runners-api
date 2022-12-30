import { ApiKeyAuthGuard } from '@core/guards/apikey.guard';
import { ApiKeyStrategy } from '@core/strategies/api.key.strategy';
import { AuthService } from '@core/services/auth.service';
import { HttpService } from '@core/services/http.service';
import { PrismaService } from '@core/services/prisma.service';
import { RequesterService } from '@core/services/requester.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [
        HttpService,
        RequesterService,
        PrismaService,
        AuthService,
        ApiKeyStrategy,
        ApiKeyAuthGuard
    ],
    exports: [
        RequesterService,
        PrismaService,
        AuthService,
        ApiKeyStrategy,
        ApiKeyAuthGuard
    ]
})
export class CoreModule {}
