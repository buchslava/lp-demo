import { Injectable } from '@nestjs/common';

export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public token?: string
  ) {}
}

@Injectable()
export class AppService {
  users: User[] = [
    {
      id: 1,
      username: 'test',
      password: 'test',
      firstName: 'Test',
      lastName: 'User',
    },
  ];

  getUsers(headers: Headers) {
    if (!this.isLoggedIn(headers)) {
      return this.unauthorized();
    }
    return this.users;
  }

  authenticate(body: any) {
    const { username, password } = body;
    const user = this.users.find(
      (x) => x.username === username && x.password === password
    );
    if (!user) {
      return this.error('Username or password is incorrect');
    }
    return {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      token: 'fake-jwt-token',
    };
  }

  private isLoggedIn(headers: Headers) {
    return headers.get('Authorization') === 'Bearer fake-jwt-token';
  }

  private unauthorized(): never {
    //@ts-ignore
    return throwError({ status: 401, error: { message: 'Unauthorised' } });
  }

  private error(message: any) {
    //@ts-ignore
    return throwError({ error: { message } });
  }
}
