const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

const SERVICE_ACCOUNT_PATH = process.env.SERVICE_ACCOUNT_PATH;
const serviceAccount = require(`../../${SERVICE_ACCOUNT_PATH}`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { db };