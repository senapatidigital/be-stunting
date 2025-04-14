import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        user: {
            fullName: string;
            username: string;
            role: import(".prisma/client").$Enums.Role;
            id: string;
        };
        token: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        user: {
            fullName: string;
            email: string;
            username: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
            id: string;
        };
        token: string;
    }>;
    getMe(req: any): any;
}
