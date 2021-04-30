import { Injectable } from '@nestjs/common';
import { Simios2faService } from '@simios-dev/2fa';

@Injectable()
export class AppService {
  private secret = '';

  constructor(
    private readonly s2faService: Simios2faService
  ) {
  }

  async getData() {
    const twofa = await this.s2faService.generate2FAForUser('yoni');
    this.secret = twofa.secret;
    return twofa.otpAuth;
  }

  async verifyAuthCode(code: string) {
    return this.s2faService.verifyAuthCode(code, this.secret);

  }
}
