import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  public async canActivate(ctx: ExecutionContext): Promise<boolean> | never {
    console.log(ctx);
    return true;
  }
}
