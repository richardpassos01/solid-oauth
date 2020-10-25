import { v4 as uuid } from 'uuid';
import crypto from 'crypto';

export type UserPassword = string;

export type UserIdentifier = {
  type: number;
  value: string;
};

export interface DataTransferObjectUser {
  name: string;
  email: string;
  username: string;
  document: string;
  password: UserPassword
}

export interface UserId {
  id: string;
}

export default class User {
  public readonly id: UserId;

  public name: string;

  public email: string;

  public username: string;

  public document: string;

  public hash: string;

  public salt: string;

  constructor(props: Omit<User, 'id' | 'hash' | 'salt' | 'setPassword' | 'validPassword'>, id?: UserId) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }

  public setPassword(password: UserPassword): void {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  }

  public validPassword(password: UserPassword): boolean {
    const validHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');

    return this.hash === validHash;
  }
}
