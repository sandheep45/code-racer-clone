export default {
  providers: [
    {
      domain: process.env.AUTH0_ISSUER_BASE_URL,
      applicationID: process.env.AUTH0_CLIENT_ID,
    },
  ],
};
