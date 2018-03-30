// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  bungie: {
    apiKey: '92dbdf3924964a6e945cc774e646588d',
    apiUrl: 'https://www.bungie.net/Platform/',
    authUrl: 'https://www.bungie.net/en/OAuth/Authorize',
    clientId: '23391',
  },
  production: false
};
