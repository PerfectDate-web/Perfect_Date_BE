import { Inject, Injectable } from "@nestjs/common"
import { ConfigService, ConfigType } from "@nestjs/config"
import { PassportStrategy } from "@nestjs/passport"
import { Strategy, VerifyCallback } from "passport-google-oauth20"

import googleOauthConfig from "src/config/google-oauth.config"
import { AuthService } from "src/modules/auth/auth.service"

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      clientID: configService.get<string>('GG_CLIENT_ID') || '',
      clientSecret: configService.get<string>('GG_SECRET') || '',
      callbackURL: configService.get<string>('GOOGLE_CALLBACK_URL') || '',
      scope: ['email', 'profile']
    })
  }

  //  {
  //   id: '100379721700509275980',
  //   displayName: 'Trần Minh Trí',
  //   name: { familyName: 'Minh Trí', givenName: 'Trần' },
  //   emails: [ { value: 'tranminhtri10213@gmail.com', verified: true } ],
  //   photos: [
  //     {
  //       value: 'https://lh3.googleusercontent.com/a/ACg8ocIsMenkMzyszNuun2T7LPhMhaqBuqhMNzDSo-or3_H4rQngvKA=s96-c'
  //     }
  //   ],
  //   provider: 'google',
  //   _raw: '{\n' +
  //     '  "sub": "100379721700509275980",\n' +
  //     '  "name": "Trần Minh Trí",\n' +
  //     '  "given_name": "Trần",\n' +
  //     '  "family_name": "Minh Trí",\n' +
  //     '  "picture": "https://lh3.googleusercontent.com/a/ACg8ocIsMenkMzyszNuun2T7LPhMhaqBuqhMNzDSo-or3_H4rQngvKA\\u003ds96-c",\n' +
  //     '  "email": "tranminhtri10213@gmail.com",\n' +
  //     '  "email_verified": true\n' +
  //     '}',
  //   _json: {
  //     sub: '100379721700509275980',
  //     name: 'Trần Minh Trí',
  //     given_name: 'Trần',
  //     family_name: 'Minh Trí',
  //     picture: 'https://lh3.googleusercontent.com/a/ACg8ocIsMenkMzyszNuun2T7LPhMhaqBuqhMNzDSo-or3_H4rQngvKA=s96-c',
  //     email: 'tranminhtri10213@gmail.com',
  //     email_verified: true
  //   }
  // }
  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) {
    const {  emails, photos, displayName, } = profile
    // const user = {
    //   email: emails[0].value,
    //   firstName: name.givenName,
    //   lastName: name.familyName,
    //   picture: photos[0].value,
    //   accessToken
    // }
    const user = await this.authService.validateGoogleUser({
      email: emails[0].value,
      name: displayName,
      avatar: photos[0].value,
      verified: emails[0].verified
    })
    done(null, user)
  }

}