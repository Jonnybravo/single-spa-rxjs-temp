import { endpoints } from './constants';
import { request } from './request';

export async function updateAppState(name) {
  return request({
    type: 'PUT',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({ name: name })
  });
}

export async function addNewApp(name, route, url) {
  return request({
    type: 'POST',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ name, route, url })
  });
}

export async function removeApp(name) {
  return request({
    type: 'DELETE',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ name })
  });
}
// export async function stateUpload(fileName, folderName) {
//   return request({
//     type: 'GET',
//     endpoint: `${endpoints.uploadFile}${fileName}`,
//     params: {
//       folderName
//     }
//   });
// }