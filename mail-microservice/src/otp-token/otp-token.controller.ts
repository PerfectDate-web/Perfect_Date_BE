import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { OtpTokenService } from './otp-token.service';
import { VerifyOtpTokenDto } from './dto/verify-otp-token.dto';
import { GenerateOtpTokenDto } from './dto/generate-otp-token.dto';


@Controller()
export class OtpTokenController {
  constructor(private readonly otpTokenService: OtpTokenService) { }

  @EventPattern('create_otp_token')
  async create(@Payload() generateOtpTokenDto: GenerateOtpTokenDto) {
    return this.otpTokenService.generateOtp(generateOtpTokenDto.email);
  }

  @MessagePattern('verify_otp_token')
  async verify(@Payload() verifyOtpTokenDto: VerifyOtpTokenDto) {
    return this.otpTokenService.verifyOtp(verifyOtpTokenDto);
  }
}
