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
  if (typeof data !== 'object' || data === null) {
    throw new Error('Input must be an object');
  }

  const keyValuePairs: string[] = [];

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];

      keyValuePairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(stringifyValue(value))}`);
    }
  }

  const queryString = keyValuePairs.join('&');

  return queryString ? `?${queryString}` : '';
}

function stringifyValue(value: any): string {
  if (typeof value === 'object' && value !== null) {
    if (Array.isArray(value)) {
      return value.join(',');
    }
    return '[object Object]';
  }
  return String(value);
}

// Определяем тип для метода
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// Определяем интерфейс для объекта параметров запроса
interface RequestOptions {
  method: HttpMethod;
  headers?: { [key: string]: string };
  data?: any;
  timeout?: number;
}

export class HTTPTransport {
  request = (url: string, options: RequestOptions, timeout = 5000): Promise<XMLHttpRequest> => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(options.method, url);

    if (options.headers && typeof options.headers === 'object') {
      Object.keys(options.headers).forEach((key) => {
        xhr.setRequestHeader(key, options.headers![key]);
      });
    }

    xhr.onload = function () {
      resolve(xhr);
    };

    xhr.onerror = function () {
      reject(new Error('Network Error'));
    };

    xhr.timeout = timeout;
    xhr.ontimeout = function () {
      reject(new Error('Timeout exceeded'));
    };

    let requestData;
    if (options.method === 'GET') {
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
      xhr.setRequestHeader('Content-Type', 'application/json');
    }

    xhr.send(requestData);
  });

  get = (
    url: string,
    options: RequestOptions = {
      method: 'GET',
    },
  ): Promise<XMLHttpRequest> => {
    const requestData: { [key: string]: string } = {};
    if (options.data) {
      for (const key in options.data) {
        if (options.data.hasOwnProperty(key)) {
          requestData[key] = stringifyValue(options.data[key]);
        }
      }
    }

    const queryString = queryStringify(requestData);
    const fullURL = url + queryString;

    return this.request(fullURL, { ...options, method: 'GET' }, options.timeout);
  };

  put = (
    url: string,
    options: RequestOptions = {
      method: 'PUT',
    },
  ): Promise<XMLHttpRequest> => this.request(url, { ...options, method: 'PUT' }, options.timeout).catch((error) => {
    console.error('PUT запрос завершился ошибкой:', error);
    throw error;
  });

  post = (
    url: string,
    options: RequestOptions = {
      method: 'POST',
    },
  ): Promise<XMLHttpRequest> => this.request(url, { ...options, method: 'POST' }, options.timeout).catch((error) => {
    console.error('POST запрос завершился ошибкой:', error);
    throw error;
  });

  delete = (
    url: string,
    options: RequestOptions = {
      method: 'DELETE',
    },
  ): Promise<XMLHttpRequest> => this.request(url, { ...options, method: 'DELETE' }, options.timeout).catch((error) => {
    console.error('DELETE запрос завершился ошибкой:', error);
    throw error;
  });
}
