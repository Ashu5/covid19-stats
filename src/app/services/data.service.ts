import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
private indiaURL:string='https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise';
private globalURL:string='https://api.coronatracker.com/v3/stats/worldometer/global';
   getIndiaCovidData(){
   return this.httpClient.get(this.indiaURL);
  }

  getGlobalCovidData(){
    return this.httpClient.get(this.globalURL);
  }
}
