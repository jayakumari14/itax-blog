import nodemailer from 'nodemailer';

export const emailTypes = {
  email: 'Email verification otp',
  newpassword: 'Password reset otp',
};

class EmailService {
  static transporter = null;

  static async wrapedSendMail(mailOptions) {
    return new Promise((resolve, reject) => {
      EmailService.transporter?.sendMail(mailOptions, (error, result) => {
        if (error) {
          console.log(`Error is ${error}`);
          reject({ success: false, error });
        } else {
          resolve({ success: true, result });
        }
      });
    });
  }

  static async initialize() {
    if (EmailService.transporter != null) {
      return;
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.OPT_EMAIL,
        pass: process.env.OTP_PASS,
      },
    });

    await transporter.verify();

    EmailService.transporter = transporter;
  }

  static async sendMail(recipient, subject, body) {
    try {
      await EmailService.initialize();

      const mailOptions = {
        from: 'support@itaxeasy.com',
        to: recipient,
        subject,
        text: body,
      };

      const { success, error } = await EmailService.wrapedSendMail(mailOptions);

      if (!success) {
        throw error;
      }

      return { success: true, message: 'Email sent' };
    } catch (e) {
      console.error(e);
      return { success: false, message: 'Could not send email.' };
    }
  }
}

export default EmailService;
