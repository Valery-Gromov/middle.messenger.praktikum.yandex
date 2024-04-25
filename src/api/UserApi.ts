import BaseAPI from './BaseApi';
import { HTTPTransport, RequestOptions } from '../tools/HTTPTransport';

const baseURL = 'https://ya-praktikum.tech/api/v2';
const http = new HTTPTransport();

export class UserAPI extends BaseAPI {
  private _baseURL: string;

  constructor(baseURL: string) {
    super();
    this._baseURL = baseURL;
  }

  createUser(data: RequestOptions) {
    return http.post(`${this._baseURL}/auth/signup`, data);
  }

  login(data: RequestOptions) {
    return http.post(`${this._baseURL}/auth/signin`, data);
  }

  logout(data: RequestOptions) {
    return http.post(`${this._baseURL}/auth/logout`, data);
  }

  getUser(data: RequestOptions) {
    return http.get(`${this._baseURL}/auth/user`, data);
  }
}

export const userApi = new UserAPI(baseURL);
