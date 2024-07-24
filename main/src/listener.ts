import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://yjpsongn:4uyeP9h-I4-VVpp5_WJjWNLG7vf6vm0S@cow.rmq2.cloudamqp.com/yjpsongn',
      ],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen();
}
bootstrap();
