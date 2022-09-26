import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { UsersController } from './users.controller';
import { USERS_PACKAGE_NAME, USERS_SERVICE_NAME } from './users.pb';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USERS_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50051',
          package: USERS_PACKAGE_NAME,
          protoPath: 'node_modules/proyectos-juegos-proto/proto/users.proto',
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [],
  exports: [],
})
export class UsersModule {}
