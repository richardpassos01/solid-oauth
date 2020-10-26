import { v4 as uuid } from 'uuid';
import crypto from 'crypto';

export type UserPassword = string;

export type UserIdentifier = {
  id?: string;
  username?: string;
  email?: string;
  document?: number;
};

export interface DataTransferObjectUser {
  name: string;
  email: string;
  username: string;
  document: number;
  password: UserPassword
}

export type ID = string;
export interface UserId {
  id: ID;
}

export default class User {
  public readonly id: string;

  public name: string;

  public email: string;

  public username: string;

  public document: number;

  public salt: string;

  public hash: string;

  constructor(props: Omit<User, 'id' | 'hash' | 'salt' | 'setPassword' | 'validPassword'>, id?: string) {
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
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');

    return this.hash === hash;
  }
}
