import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class DeleteGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const token = context.switchToHttp().getRequest().rawHeaders;
    if (
      token.find((element) => element == 'meegu') == 'meegu' &&
      token.find((element) => element == 'acess_token') == 'acess_token'
    ) {
      return true;
    } else {
      return false;
    }
  }
}
