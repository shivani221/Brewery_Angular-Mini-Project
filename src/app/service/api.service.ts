import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getBeer(){
    return this.http.get<any>("https://api.punkapi.com/v2/beers/").pipe(map((res: any) => {
      return res;
    }))
  }

}
