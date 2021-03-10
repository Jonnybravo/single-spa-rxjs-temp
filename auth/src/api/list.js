import { endpoints } from './constants';
import { request } from './request';

export async function userSignIn(username, password, application = '@pmi/iitops-ic-awacs-acc-web') {
  return request({
    type: 'POST',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ username, password, application })
  });
}
