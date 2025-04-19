import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
    const app: INestApplication<NestExpressApplication> =
        await NestFactory.create(AppModule);

    app.setGlobalPrefix('v1');

    await app.listen(process.env.API_PORT ?? 3000);
}
bootstrap();
