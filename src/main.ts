import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT || 8080);

    Logger.log(
        `Server running on port ${process.env.PORT}`,
        process.env.NODE_ENV.toUpperCase() + ' MODE',
    );
}
bootstrap();
