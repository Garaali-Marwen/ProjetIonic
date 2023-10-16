import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllIngredients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiServerUrl + `/item/all`);
  }

  public addItem(formdata: FormData){
    return this.http.post(this.apiServerUrl+`/item/add`, formdata);
  }

  public getItemById(id: number){
    return this.http.get(this.apiServerUrl+`/item/${id}`)
  }

  public getItemsNames(){
    return this.http.get(this.apiServerUrl+`/item/names`)
  }

  public getItemsByName(name: string){
    return this.http.get(this.apiServerUrl+`/item/name/${name}`)
  }
}
