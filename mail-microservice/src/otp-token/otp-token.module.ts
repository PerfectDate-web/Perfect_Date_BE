import { Module } from '@nestjs/common';
import { OtpTokenService } from './otp-token.service';
import { OtpTokenController } from './otp-token.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OtpToken, OtpTokenSchema } from './schemas/otp-token.schema';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: OtpToken.name,
        schema: OtpTokenSchema,
      },
    ]),
    MailModule
  ],
  controllers: [OtpTokenController],
  providers: [OtpTokenService],
})
export class OtpTokenModule { }
