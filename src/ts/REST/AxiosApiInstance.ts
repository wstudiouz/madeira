import axios, {AxiosInstance} from "axios";

export class AxiosApiInstance {
  private static _instance?: AxiosApiInstance;

  axiosInstace: AxiosInstance;

  static get instance(): AxiosApiInstance {
    if (this._instance === undefined) this._instance = new AxiosApiInstance();
    return this._instance;
  }
  constructor() {
    this.axiosInstace = axios.create({});
  }
}
