import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { MailProvider, Message } from '@business/shared/MailProvider';

export default class MailTrapMailProvider implements MailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'e51b0ddb7e0fe9',
        pass: 'd465f2e97d7473',
      },
    });
  }

  async sendEmail(message: Message): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
