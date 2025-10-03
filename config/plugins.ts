export default ({ env }) => ({
  upload: {
    provider: 'local', // or your current provider
    providerOptions: {
      // Your provider options here
    },
    actionOptions: {
      upload: {
        url: (fileName: string) => `${process.env.APP_URL}/uploads/${fileName}`, // Make sure APP_URL is set
      },
    },
  },
});