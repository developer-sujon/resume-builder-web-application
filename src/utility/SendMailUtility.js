//External import
const nodemailer = require("nodemailer");

const SendMailUtility = async (emailTo, emailText, emailSubject) => {
  let transporter = await nodemailer.createTransport({
    name: "mail.devsujon.com",
    host: "mail.devsujon.com",
    port: 25,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOption = {
    from: `${process.env.APPLICATION_NAME} <contact@devsujon.com>`,
    to: emailTo,
    subject: emailSubject,
    html: emailText,
  };

  return await transporter.sendMail(mailOption);
};

module.exports = SendMailUtility;
