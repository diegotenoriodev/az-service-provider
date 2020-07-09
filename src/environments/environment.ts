// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    clientID: '2gcr66aFoXaGvSFc7XZhOREwPPra2NZt',
    domain: 'access01.us.auth0.com', // e.g., https://you.auth0.com/
    audience: 'https://quoteservice.access01.com', // e.g., http://localhost:3001
    redirect: 'https://127.0.0.1:4200/home?callback=true',
    scope: 'openid profile name email'
  },
  api: {
    endpoint: "https://localhost:44394/api/"
  }
};