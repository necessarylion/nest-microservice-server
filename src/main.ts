import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { globSync } from 'glob';
import { basename } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const protoPath  = globSync(__dirname + '/**/*.proto', {})
  const packages = protoPath.map((file) => {
    return basename(file, '.proto')
  })

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: packages,
      protoPath: protoPath
    },
  });
  app.listen()
}
bootstrap();
