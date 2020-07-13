import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
private dataURL:string='https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise';

   getIndiaCovidData(){
   return this.httpClient.get(this.dataURL);
  }
}
