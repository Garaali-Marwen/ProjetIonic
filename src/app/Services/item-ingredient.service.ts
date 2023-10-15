import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ItemIngredientService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  addItemIngredient(itemIngredient: any){
    return this.http.post(this.apiServerUrl+`/itemIngredient/add`, itemIngredient);
  }
}
