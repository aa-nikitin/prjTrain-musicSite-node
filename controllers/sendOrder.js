const configMail = require('../config/config-mail.json');
const nodemailer = require('nodemailer');

module.exports = (req, res, next) => {
  const { subject, smtp } = configMail.mail;
  const transporter = nodemailer.createTransport(smtp);
  const { name, email, message } = req.body;
  const mailOptions = {
    from: `"${name}" <${smtp.auth.user}>`,
    to: smtp.auth.user,
    subject: subject,
    text: message.trim().slice(0, 500) + `\n Отправлено от: <${email}>`
  };

  transporter.sendMail(mailOptions, err => {
    if (err) {
      return res.json({
        message: `При отправке письма произошла ошибка!: ${err}`
      });
    }
    return res.status(200).json({ maessage: 'Письмо успешно отправлено!' });
  });
};
