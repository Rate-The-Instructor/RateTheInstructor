import {
  Injectable,
  ForbiddenException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/service/user.service';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService, //   private configService: ConfigService,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  async signup(authDto: CreateUserDto) {
    try {
      const user = await this.userService.create(authDto);
      return user;
    } catch (e) {
      throw e;
    }
  }

  @HttpCode(HttpStatus.CREATED)
  async login(loginData) {
    console.log(loginData, 'loginData');
    const user = await this.userService.findByUsername(loginData.username);

    if (!user) {
      throw new ForbiddenException('Access Denied');
    }
    console.log(user);
    console.log(loginData.password);
    const match = await compare(loginData.password, user.password);

    if (!match) {
      console.log("passowrd don't match");
      throw new ForbiddenException('Access Denied');
    }

    const token = await this.getToken(loginData.username, user._id);
    const {
      _id,
      username,
      firstname,
      lastname,
      department,
      schoolId,
      email,
      academicYear,
      createdAt,
      updatedAt,
    } = user;
    // console.log({ id: _id, ...rest, ...token }, 'the response payload');
    return {
      id: _id,
      username,
      firstname,
      lastname,
      department,
      schoolId,
      email,
      academicYear,
      createdAt,
      updatedAt,
      ...token,
    };
  }

  async getToken(username: string, id: string) {
    const payload = { username, sub: id };
    const token = await this.jwtService.sign(payload, {
      secret: 'SECRET',
      expiresIn: 3600 * 24 * 7, // for 7 days
    });

    return { access_token: token };
  }
  async logout() {}
}
