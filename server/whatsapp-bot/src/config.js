require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  verifyToken: process.env.VERIFY_TOKEN,
  phoneNumberId: process.env.PHONE_NUMBER_ID,
  accessToken: process.env.ACCESS_TOKEN,
  appSecret: process.env.APP_SECRET,
};