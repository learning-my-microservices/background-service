import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './background.module';

async function bootstrap() {
  try {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_HOST],
          queue: 'background-queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    );
    await app.listen();
  } catch (error) {
    throw error;
  }
}
bootstrap();
