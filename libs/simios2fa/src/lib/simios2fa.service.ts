import { Injectable } from '@nestjs/common';
import { authenticator } from 'otplib';

const appName = 'SIMIOS';

@Injectable()
export class Simios2faService {
  async generate2FAForUser(uniqueIdentifier: string) {
    const secret = authenticator.generateSecret();

    const otpAuth = authenticator.keyuri(uniqueIdentifier, appName, secret);

    return {
      secret,
      otpAuth
    };
  }

  async verifyAuthCode(code: string, secret: string) {
    return authenticator.verify({
      token: code,
      secret
    });
  }
}
