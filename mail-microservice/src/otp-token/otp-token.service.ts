import { BadRequestException, Injectable } from '@nestjs/common';
import { OtpToken } from './schemas/otp-token.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as crypto from 'crypto';
import { MailService } from 'src/mail/mail.service';
import { VerifyOtpTokenDto } from './dto/verify-otp-token.dto';
@Injectable()
export class OtpTokenService {
  constructor(
    @InjectModel(OtpToken.name) private readonly otpModel: Model<OtpToken>,
    private mailService: MailService
  ) { }

  async generateOtp(email: string) {
    const otp = crypto.randomInt(100000, 999999).toString(); // Sinh OTP 6 chữ số
    const expiry_time = new Date(Date.now() + 5 * 60 * 1000); // Hết hạn sau 5 phút

    await this.otpModel.create({ email, otp_code: otp, expiry_time });

    // Gửi OTP đến email (tích hợp Nodemailer hoặc dịch vụ email khác) 
    await this.mailService.sendMail(email, {
      otp_token: otp
    }, 'otp-token-template', `Your OTP code`);

    return { message: 'OTP đã được gửi!' };
  }

  async verifyOtp(verifyOtpTokenDto: VerifyOtpTokenDto) {
    const otpRecord = await this.otpModel.findOne({ email: verifyOtpTokenDto.email, otp_code: verifyOtpTokenDto.otp_code });

    if (!otpRecord) throw new BadRequestException('OTP không hợp lệ!');
    if (otpRecord.expiry_time < new Date()) throw new BadRequestException('OTP đã hết hạn!');

    otpRecord.verified = true;
    await otpRecord.save();

    return true;
  }
}
