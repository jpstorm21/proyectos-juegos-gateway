import { Inject, Controller } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

import { UsersServiceClient, USERS_SERVICE_NAME } from './users.pb';

import type {
  CreateUserRequest,
  CreateUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  DeleteUserRequest,
  DeleteUserResponse,
} from './users.pb';

@Controller('users')
export class UsersController {
  private usersServiceClient: UsersServiceClient;

  @Inject(USERS_SERVICE_NAME)
  private readonly usersClient: ClientGrpc;

  public onModuleInit(): void {
    this.usersServiceClient =
      this.usersClient.getService<UsersServiceClient>(USERS_SERVICE_NAME);
  }

  async createUser(
    createUserRequest: CreateUserRequest,
  ): Promise<CreateUserResponse> {
    return firstValueFrom(
      this.usersServiceClient.createUser(createUserRequest),
    );
  }

  async updateUser(
    updateUserRequest: UpdateUserRequest,
  ): Promise<UpdateUserResponse> {
    return firstValueFrom(
      this.usersServiceClient.updateUser(updateUserRequest),
    );
  }

  async deleteUser(
    deleteUserRequest: DeleteUserRequest,
  ): Promise<DeleteUserResponse> {
    return firstValueFrom(
      this.usersServiceClient.deleteUser(deleteUserRequest),
    );
  }
}
