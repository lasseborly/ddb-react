import { configure } from '@storybook/react';
import './dev-fonts.scss';
import '../src/components/components.scss';
import getToken, { setToken } from '../src/core/token';
import "../src/core/mount";

let token = getToken();
if (!token) {
  // We do not want to keep prompting people if they have already cancelled the prompt once.
  const seenKey = 'ddb-token-prompt-seen';
  const promptHasBeenCancelled = localStorage.getItem(seenKey);
  if (!promptHasBeenCancelled && ENV != "test") {
    console.log(ENV);
    token = window.prompt("Do you have a token for Adgangsplatformen? Input it here.");
    if (token === null) { // which means the prompt has been cancelled
      localStorage.setItem(seenKey, "seen");
    }
  }
}

/**
 * DDB_TOKEN is set in ".storybook/webpack.config.js"
 * Look for it in DefinePlugin.
 */
setToken(token || DDB_TOKEN);

/**
 * This emulates the way we would set from the server that a user is authenticated aka. logged in.
 * In a production/server environment this value is set before "init()" in "/src/core/mount.js" has been run.
 * In this development instance we want to set explicitly to true after the "ddbReact" object has been initialized
 * as to not override the ddbReact object. We presume for now that if a user is in a development environment
 * they are authenticated and only in a development environment a token is available.
 */
window.ddbReact.userAuthenticated = true;

configure(require.context('../src', true, /\.dev\.jsx$/), module);