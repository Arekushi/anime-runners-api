import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    #envAPIKey: string;

    constructor(
        public config: ConfigService
    ) {
        this.#envAPIKey = this.config.get('API_KEY')
    }

    validateApiKey(apiKey: string) {
        return this.#envAPIKey === apiKey;
    }
}
