import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  signIn(user: any) {
    return this.http.post(this.apiServerUrl+`/user/authenticate`, user)
  }

  getUserById(id: number){
    return this.http.get(this.apiServerUrl+`/user/${id}`);
  }


  public getUserId() {
    return JSON.parse(localStorage.getItem('userId')!);
  }

  public setUserId(userId: number) {
    localStorage.setItem('userId', JSON.stringify(userId));
  }

  public getUserEmail() {
    return JSON.parse(localStorage.getItem('userEmail')!);
  }

  public setUserEmail(userEmail: number) {
    localStorage.setItem('userEmail', JSON.stringify(userEmail));
  }

  public setRole(role: string) {
    localStorage.setItem('role', JSON.stringify(role));
  }

  public getRole(): string {
    return JSON.parse(localStorage.getItem('role')!);
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRole();
  }
}
