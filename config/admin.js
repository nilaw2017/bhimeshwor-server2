module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2171050b9683c347f9bfe3ed3fbcb5dc'),
  },
});
