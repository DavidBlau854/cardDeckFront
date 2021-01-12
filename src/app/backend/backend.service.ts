import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  URL: string = "http://localhost:3000/"//change here for the real API path
  constructor(private http: HttpClient) { }

  getCard() {
    return this.http.get(this.URL, { responseType: "blob" })
  }
}
