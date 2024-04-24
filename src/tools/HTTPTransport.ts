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
type HttpMethodType = "GET" | "POST" | "PUT" | "DELETE";

export const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

// Определяем интерфейс для объекта параметров запроса
export interface RequestOptions {
  method: HttpMethodType;
  credentials?: string, // Нужно подставлять куки
  mode?: string, // Работаем с CORS
  headers?: { [key: string]: string };
  body?: String;
  // eslint-disable-next-line
  data?: any;
  timeout?: number;
}

type HTTPMethod = (url: string, options?: RequestOptions) => Promise<unknown>;

export class HTTPTransport {
  get: HTTPMethod = (url, options) => {
    return this.request(
      url,
      { ...options, method: 'GET' },
      options?.timeout
    );
  };

  post: HTTPMethod = (url, options) => {
    return this.request(
      url,
      { ...options, method: 'POST' },
      options?.timeout
    );
  };

  put: HTTPMethod = (url, options) => {
    return this.request(
      url,
      { ...options, method: 'PUT' },
      options?.timeout
    );
  };

  delete: HTTPMethod = (url, options) => {
    return this.request(
      url,
      { ...options, method: 'DELETE' },
      options?.timeout
    );
  };

  request = (url: string, options: RequestOptions, timeout = 5000) => {
    const { headers = {}, method, data } = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject("No method");
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === 'GET';

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);
      xhr.withCredentials = true;

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
