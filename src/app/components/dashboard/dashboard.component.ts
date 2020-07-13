import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  constructor(private service:DataService) { }
  
ttotal:number=11111;
indiaCovidData:any[]=[];
statewiseData:any[]=[];
globalCovidDataArray:any[]=[];

  getData(){
    this.service.getIndiaCovidData()

    .subscribe((responseData)=>{
      this.indiaCovidData.push(responseData['data']['total']);
      this.statewiseData.push(responseData['data']);
      console.log("Total India Data-",this.indiaCovidData);
      console.log("StateWise Data-",this.statewiseData)
    
    });
  }

  getGlobalData(){
    this.service.getGlobalCovidData()
    .subscribe((responseData)=>{
    this.globalCovidDataArray.push(responseData);
    console.log("Global Data",this.globalCovidDataArray);
    });
  }


  ngOnInit() {
    this.getData();
    this.getGlobalData();
  }

}
