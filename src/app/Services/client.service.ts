import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  signUp(client: any) {
    return this.http.post(this.apiServerUrl + `/client/add`, client);
  }

  getClientById(id: number) {
    return this.http.get(this.apiServerUrl + `/client/${id}`)
  }

  updateClient(client: any) {
    return this.http.put(this.apiServerUrl + `/client/update`, client);
  }

  updateClientImage(data: FormData) {
    return this.http.put(this.apiServerUrl + `/client/update/image`, data);
  }
}
