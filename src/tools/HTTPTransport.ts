interface DataObject {
  [key: string]:
    | string
    | number
    | boolean
    | Array<string | number | boolean>
    | object
    | null
    | undefined;
}

function queryStringify(data: DataObject): string {
  if (typeof data !== "object" || data === null) {
    throw new Error("Input must be an object");
  }

  const keyValuePairs: string[] = [];

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];

      keyValuePairs.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(
          stringifyValue(value)
        )}`
      );
    }
  }

  const queryString = keyValuePairs.join("&");

  return queryString ? `?${queryString}` : "";
}

// eslint-disable-next-line
function stringifyValue(value: any): string {
  if (typeof value === "object" && value !== null) {
    if (Array.isArray(value)) {
      return value.join(",");
    }
    return "[object Object]";
  }
  return String(value);
}

// Определяем тип для метода
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// Определяем интерфейс для объекта параметров запроса
interface RequestOptions {
  method: HttpMethod;
  headers?: { [key: string]: string };
  // eslint-disable-next-line
  data?: any;
  timeout?: number;
}

type HTTPMethod = (url: string, options?: RequestOptions) => Promise<unknown>;

export class HTTPTransport {
  request = (
    url: string,
    options: RequestOptions,
    timeout = 5000
  ): Promise<XMLHttpRequest> =>
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(options.method, url);

      if (options.headers && typeof options.headers === "object") {
        Object.keys(options.headers).forEach((key) => {
          xhr.setRequestHeader(key, options.headers![key]);
        });
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onerror = function () {
        reject(new Error("Network Error"));
      };

      xhr.timeout = timeout;
      xhr.ontimeout = function () {
        reject(new Error("Timeout exceeded"));
      };

      let requestData;
      if (options.method === "GET") {
        if (options.data) {
          try {
            const params = new URLSearchParams(options.data);
            requestData = params.toString();
          } catch (error) {
            reject(error);
          }
        }
      } else if (options.data) {
        requestData = JSON.stringify(options.data);
        xhr.setRequestHeader("Content-Type", "application/json");
      }

      xhr.send(requestData);
    });

  get: HTTPMethod = (
    url,
    options = {
      method: "GET",
    }
  ) => {
    const requestData: { [key: string]: string } = {};
    if (options.data) {
      for (const key in options.data) {
        // eslint-disable-next-line
        if (options.data.hasOwnProperty(key)) {
          requestData[key] = stringifyValue(options.data[key]);
        }
      }
    }

    const queryString = queryStringify(requestData);
    const fullURL = url + queryString;

    return this.request(
      fullURL,
      { ...options, method: "GET" },
      options.timeout
    );
  };

  put: HTTPMethod = (
    url,
    options = {
      method: "PUT",
    }
  ) =>
    this.request(url, { ...options, method: "PUT" }, options.timeout).catch(
      (error) => {
        console.error("PUT запрос завершился ошибкой:", error);
        throw error;
      }
    );

  post: HTTPMethod = (
    url,
    options = {
      method: "POST",
    }
  ) =>
    this.request(url, { ...options, method: "POST" }, options.timeout).catch(
      (error) => {
        console.error("POST запрос завершился ошибкой:", error);
        throw error;
      }
    );

  delete: HTTPMethod = (
    url,
    options = {
      method: "DELETE",
    }
  ) =>
    this.request(url, { ...options, method: "DELETE" }, options.timeout).catch(
      (error) => {
        console.error("DELETE запрос завершился ошибкой:", error);
        throw error;
      }
    );
}
