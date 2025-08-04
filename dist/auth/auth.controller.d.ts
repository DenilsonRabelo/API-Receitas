import { AuthService } from './auth.service';
import { AuthRequest } from './model/AuthRequest';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: AuthRequest): Promise<import("./model/UserToken").UserToken>;
}
