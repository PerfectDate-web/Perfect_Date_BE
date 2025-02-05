import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from 'src/strategies/google.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { KeyTokenModule } from '../key-token/key-token.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtAccessTokenStrategy } from 'src/strategies/jwt-access.strategy';

@Module({
  imports: [
    // ConfigModule.forFeature(googleOauthConfig),
    UserModule,
    KeyTokenModule,
    PassportModule,
    JwtModule.register({
      signOptions: {
        algorithm: 'RS256', 
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,GoogleStrategy,JwtAccessTokenStrategy],
})
export class AuthModule {}
