import { tags } from 'typia';

export interface ISigninBody {
  email: string & tags.Format<'email'>;
  password: string;
}

export interface ISignupBody {
  nickname?: string & tags.Pattern<'^[a-zA-Z]+$'>;
  email: string & tags.Format<'email'>;
  password: string;
}