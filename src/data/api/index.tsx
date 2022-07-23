import axios, {AxiosError, AxiosResponse} from "axios"

export const axiosInstance = axios.create({withCredentials: false})

export interface ApiResponse {
  status: number,
  data: any,
  error: {
    message: string,
    raw: AxiosError
  } | null
}

export default class Api {
  protected baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  protected handleSuccess(response: AxiosResponse): Promise<ApiResponse> {
    return Promise.resolve({
      status: response.status,
      data: response.data,
      error: null
    })
  }

  protected get(url: string, headers = {}): Promise<ApiResponse> {
    return axiosInstance
      .get(`${this.baseUrl}${url}`, {
        headers: {
          Accept: 'application/json',
          ...headers
        }
      })
    .then(this.handleSuccess)
    .catch(error => {
      console.log(error.message);
      return Promise.reject({
        status: error.response.status,
        error: {
          raw: error
        }
      })
    })

  }
}
