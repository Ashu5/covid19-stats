import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-globaldata',
  templateUrl: './globaldata.component.html',
  styleUrls: ['./globaldata.component.scss']
})
export class GlobaldataComponent implements OnInit {


  displayedColumns: string[] = ['state', 'confirmed', 'recovered', 'deaths'];
  //databyCountryArray:any[]=[];
  constructor(private service: DataService) { }
  dataSource: any[];
  ELEMENT_DATA: any[] = [];


  getData() {
    this.service.getIndiaCovidData()

      .subscribe((responseData) => {
       for(let i=0;i<30;i++){
        this.ELEMENT_DATA.push(responseData['data']['statewise'][i]);
         this.dataSource = this.ELEMENT_DATA;
       }
        console.log("India StateWise Data-",  this.ELEMENT_DATA);

      });
  }


  ngOnInit() {
    this.getData();
   
  }

}
