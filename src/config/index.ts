import { GwitterConfig } from '../types/global';

let config: GwitterConfig = {
  request: {
    token: process.env.VITE_GWITTER_TOKEN?.split('?') || [],
    clientID: process.env.VITE_GWITTER_CLIENT_ID || '',
    clientSecret: process.env.VITE_GWITTER_CLIENT_SECRET || '',
    pageSize: 6,
    autoProxy:
      'https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token',
    owner: process.env.VITE_GWITTER_OWNER || 'Kemeow815',
    repo: process.env.VITE_GWITTER_REPO || 'kemiao-pyq',
  },

  app: {
    onlyShowOwner: true,
    enableRepoSwitcher: true,
    enableAbout: true,
    enableEgg: false,
  },
};

export function setConfig(newConfig: GwitterConfig) {
  if (newConfig.request) {
    config.request = {
      ...config.request,
      ...newConfig.request,
    };
  }

  if (newConfig.app) {
    config.app = {
      ...config.app,
      ...newConfig.app,
    };
  }
}

export default config;
