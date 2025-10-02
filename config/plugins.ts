export default () => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        // Your provider options here (if any)
      },
      settings: {
        // Change the URL from .media to /uploads
        url: '/uploads',
      },
    },
  },
});