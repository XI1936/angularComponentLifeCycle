import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient) { }

  getUsers(){
    const URL='https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json';
    return this.http.get(URL);
  }
}
