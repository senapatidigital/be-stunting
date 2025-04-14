import { LoginDto, RegisterDto } from './dto/create-auth.dto';
import { PrismaService } from 'src/common/services/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { BcryptService } from 'src/common/services/bcrypt.service';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly bcryptService;
    constructor(prisma: PrismaService, jwtService: JwtService, bcryptService: BcryptService);
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
    private ensureUserDoesNotExist;
    private createUser;
    private findUserByUsername;
    private validatePassword;
    private generateToken;
}
