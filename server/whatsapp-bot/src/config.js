require('dotenv').config();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'production') {
  require('./config');
}

module.exports = {
  port: PORT,
  nodeEnv: NODE_ENV,
  verifyToken: process.env.VERIFY_TOKEN,
  phoneNumberId: process.env.PHONE_NUMBER_ID,
  accessToken: process.env.ACCESS_TOKEN,
  appSecret: process.env.APP_SECRET,
};