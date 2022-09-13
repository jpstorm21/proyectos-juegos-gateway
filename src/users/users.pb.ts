/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "users";

export interface Error {
  code: number;
  message: string;
}

export interface Empty {
}

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface CreateUserResponse {
  user: User | undefined;
  error: Error | undefined;
}

export interface UpdateUserRequest {
  id: string;
  name: string;
  email: string;
}

export interface UpdateUserResponse {
  user: User | undefined;
  error: Error | undefined;
}

export interface DeleteUserRequest {
  id: string;
}

export interface DeleteUserResponse {
  user: User | undefined;
  error: Error | undefined;
}

export interface GetUsersResponse {
  data: User[];
}

export interface GetUserByIdRequest {
  id: string;
}

export interface GetUserByIdResponse {
  user: User | undefined;
  error: Error | undefined;
}

export const USERS_PACKAGE_NAME = "users";

export interface UsersServiceClient {
  createUser(request: CreateUserRequest): Observable<CreateUserResponse>;

  updateUser(request: UpdateUserRequest): Observable<UpdateUserResponse>;

  deleteUser(request: DeleteUserRequest): Observable<DeleteUserResponse>;

  getUsers(request: Empty): Observable<GetUsersResponse>;

  getUserById(request: GetUserByIdRequest): Observable<GetUserByIdResponse>;
}

export interface UsersServiceController {
  createUser(
    request: CreateUserRequest,
  ): Promise<CreateUserResponse> | Observable<CreateUserResponse> | CreateUserResponse;

  updateUser(
    request: UpdateUserRequest,
  ): Promise<UpdateUserResponse> | Observable<UpdateUserResponse> | UpdateUserResponse;

  deleteUser(
    request: DeleteUserRequest,
  ): Promise<DeleteUserResponse> | Observable<DeleteUserResponse> | DeleteUserResponse;

  getUsers(request: Empty): Promise<GetUsersResponse> | Observable<GetUsersResponse> | GetUsersResponse;

  getUserById(
    request: GetUserByIdRequest,
  ): Promise<GetUserByIdResponse> | Observable<GetUserByIdResponse> | GetUserByIdResponse;
}

export function UsersServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createUser", "updateUser", "deleteUser", "getUsers", "getUserById"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UsersService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UsersService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USERS_SERVICE_NAME = "UsersService";
