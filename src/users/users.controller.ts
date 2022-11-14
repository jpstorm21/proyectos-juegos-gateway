import { Inject, Controller } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

import {
  UsersServiceClient,
  USERS_SERVICE_NAME,
  UsersServiceController,
} from './users.pb';

import type {
  CreateUserRequest,
  CreateUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  Empty,
  GetUserByIdRequest,
  GetUserByIdResponse,
  GetUsersResponse,
} from './users.pb';

@Controller('users')
export class UsersController implements UsersServiceController {
  constructor(
    @Inject('UsersServiceClient')
    private readonly usersServiceClient: ClientGrpcProxy,
  ) {}
  private usersService: UsersServiceClient;

  onModuleInit(): void {
    this.usersService =
      this.usersServiceClient.getService<UsersServiceClient>(USERS_SERVICE_NAME);
  }

  async createUser(
    createUserRequest: CreateUserRequest,
  ): Promise<CreateUserResponse> {
    return firstValueFrom(
      this.usersService.createUser(createUserRequest),
    );
  }

  async updateUser(
    updateUserRequest: UpdateUserRequest,
  ): Promise<UpdateUserResponse> {
    return firstValueFrom(
      this.usersService.updateUser(updateUserRequest),
    );
  }

  async deleteUser(
    deleteUserRequest: DeleteUserRequest,
  ): Promise<DeleteUserResponse> {
    return firstValueFrom(
      this.usersService.deleteUser(deleteUserRequest),
    );
  }

  async getUsers(emptyRequest: Empty): Promise<GetUsersResponse> {
    return firstValueFrom(this.usersService.getUsers(emptyRequest));
  }

  async getUserById(
    getUserByIdRequest: GetUserByIdRequest,
  ): Promise<GetUserByIdResponse> {
    return firstValueFrom(
      this.usersService.getUserById(getUserByIdRequest),
    );
  }
}
