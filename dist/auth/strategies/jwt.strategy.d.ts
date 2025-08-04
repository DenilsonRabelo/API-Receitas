import { Strategy } from 'passport-jwt';
import { UserFromJwt } from '../model/UserFromJwt';
import { UserPayload } from '../model/UserPayload';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: UserPayload): Promise<UserFromJwt>;
}
export {};
