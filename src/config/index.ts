const isDev = process.env.NODE_ENV === 'development';

let config = {
  request: {
    token: ['ghp_qYs8QXhacMQSWIMZ6nw', '0bBt0RIrBXP0Ke0o9'],
    clientID: isDev ? 'Ov23liMe2hBoAJucaorq' : 'Ov23liMe2hBoAJucaorq',
    clientSecret: isDev
      ? '1161138af6a881d3b6ac45b9767d243fb542bab3'
      : '1161138af6a881d3b6ac45b9767d243fb542bab3',
    pageSize: 10,
    autoProxy:
      'https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token',
    owner: 'Kemeow815',
    repo: 'kemiao-pyq',
  },

  app: {
    onlyShowOwner: true,
    enableRepoSwitcher: true,
    enableAbout: false,
    enableEgg: false,
  },
};

const gConfig = (window as any).GWITTER_CONFIG;

if (gConfig) {
  if (gConfig.request) {
    config.request = {
      ...config.request,
      ...gConfig.request,
    };
  }
  if (gConfig.app) {
    config.app = {
      ...config.app,
      ...gConfig.app,
    };
  }
}

export default config;
