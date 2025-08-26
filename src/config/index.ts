import { GwitterConfig } from '../types/global';

let config = {
  request: {
    token: 'g?h?p?_?L?b?r?L?4?E?D?3?W?j?k?Q?c?c?O?d?G?j?r?X?t?L?9?e?L?y?x?F?b?Z?1?F?i?U?L?5',
    clientID: 'Ov23liMe2hBoAJucaorq',
    clientSecret: 'd02cb35b746e773d140da67d222f4789fe7250eb',
    pageSize: 6,
    autoProxy:
      'https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token',
    owner: 'Kemeow815',
    repo: 'kemiao-pyq',
      },

  app: {
    onlyShowOwner: false,
    enableRepoSwitcher: true,
    enableAbout: false,
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
