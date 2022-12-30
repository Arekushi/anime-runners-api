import consola from 'consola';
import config from 'config';

import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '@src/app.module';

export interface AppProps {
    url?: string;
    port?: number;
    globalPrefix?: string;
}

export class App {
    app: INestApplication;
    configService: ConfigService;
    props: AppProps;

    constructor() {
        this.props = config.util.toObject(config.get('app'));
    }

    async init(): Promise<void> {
        this.app = await NestFactory.create(AppModule);
        this.app.setGlobalPrefix(this.props.globalPrefix);
        this.app.enableCors();

        this.configService = this.app.get(ConfigService);
        this.props.port = this.configService.get<number>(
            'PORT',
            this.props.port,
        );
    }

    async listen(): Promise<void> {
        const { port, url, globalPrefix } = this.props;

        await this.app.listen(port, () => {
            consola.success(
                `Node Express server listening on ${url}:${port}/${globalPrefix}`,
            );
        });
    }
}
