import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthcService } from './auth/auth.service';
import { UsersModule } from './users/users.module';
import { UserscService } from './users/users.service';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, AuthcService, UserscService],
})
export class AppModule {}
