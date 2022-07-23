import Api, {ApiResponse} from "./index";

export interface User {
  id: string
  title: string
  firstName: string
  lastName: string
  picture: string
}

export class DummyApi extends Api {
  getUsers(limit: number = 10): Promise<ApiResponse> {
    return this.get(`/user?limit=${limit}`, {"app-id": "62dc24ce5ee3a33faa3572ec"})
  }
}

export const dummyApi = new DummyApi("http://localhost:8000/data/v1")
