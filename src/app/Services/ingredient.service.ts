import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllIngredients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiServerUrl + `/ingredient/all`);
  }

  public addIngredient(formdata: FormData){
    return this.http.post(this.apiServerUrl+`/ingredient/add`, formdata);
  }
}
