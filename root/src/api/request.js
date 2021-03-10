import { api } from "./constants";

export async function request(data) {
  let urlString = `${api.url}`;

  if (!!data.endpoint) {
    urlString += data.endpoint;
  }

  const url = new URL(urlString);

  const options = {
    method: data.type,
    headers: { ...(data.headers ? data.headers : {}) },
  };

  if (data.params) {
    Object.keys(data.params).forEach((key) => {
      url.searchParams.append(key, data.params[key]);
    });
  }

  if ((data.type === "POST" || data.type === "PUT") && data.body) {
    options.body = data.body;
  }
  const response = await fetch(String(url), options);

  return await response.text().then((text) => {
    try {
      const result = JSON.parse(text);

      if (!response.ok) {
        const error = {
          status: response.status,
          statusText: response.statusText,
        };
        return Promise.reject(error);
      }

      return result;
    } catch (err) {
      const error = {
        status: 0,
        statusText: "JSON Misformat",
      };
      return Promise.reject(error);
    }
  });
}
