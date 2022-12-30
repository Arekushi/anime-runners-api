import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { AuthService } from '@core/services/auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy, 'api-key') {

    constructor(
        private authService: AuthService
    ) {
        super(
            { header: 'api-key', prefix: '' },
            true,
            (apiKey: any, done: any) => {
                if (this.authService.validateApiKey(apiKey)) {
                    done(null, true);
                }

                done(new UnauthorizedException(), null)
            }
        );
    }
}
