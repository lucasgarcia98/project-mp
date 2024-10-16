import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import MercadoPagoConfig, { Payment } from 'mercadopago';

@Injectable()
export class AppService {
  private mpClient: MercadoPagoConfig;
  constructor() {
    this.mpClient = new MercadoPagoConfig({
      accessToken: process.env.TOKEN_MP,
      options: { timeout: 5000, idempotencyKey: randomUUID() },
    });
  }
  getHello() {}

  async generatePayment(body: any) {
    try {
      const payment = new Payment(this.mpClient);

      const paymentCreated = await payment.create({
        body,
      });

      return paymentCreated;
    } catch (error) {
      console.log(error);
    }
  }
}
