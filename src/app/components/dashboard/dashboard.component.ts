import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  constructor(private service:DataService,private spinnerService: Ng4LoadingSpinnerService) { }
  
indiaCovidData:any[]=[];
statewiseData:any[]=[];
globalCovidDataArray:any[]=[];

  getData(){
    this.service.getIndiaCovidData()

    .subscribe((responseData)=>{
      
      this.indiaCovidData.push(responseData['data']['total']);
      this.statewiseData.push(responseData['data']);
      console.log("Total India Data-",this.indiaCovidData);
      //console.log("StateWise Data-",this.statewiseData[0]['statewise']);
    
    });
  }

  getGlobalData(){
    this.spinnerService.show();
    this.service.getGlobalCovidData()
    .subscribe((responseData)=>{
      this.spinnerService.hide();
    this.globalCovidDataArray.push(responseData);
    console.log("Global Data",this.globalCovidDataArray);
    });
  }
 
  
  ngOnInit() {
    
    this.getData();
    this.getGlobalData();
  }


  

}
