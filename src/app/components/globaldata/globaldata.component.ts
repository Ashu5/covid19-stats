import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-globaldata',
  templateUrl: './globaldata.component.html',
  styleUrls: ['./globaldata.component.scss']
})
export class GlobaldataComponent implements OnInit {


  displayedColumns: string[] = ['country', 'confirmed', 'recovered', 'deaths'];
  //databyCountryArray:any[]=[];
  constructor(private service: DataService) { }
  dataSource:any[];
  ELEMENT_DATA: any[] = [];
  
  getCovidDataByCountry() {
    this.service.getCovidDataByCountry()
      .subscribe((responseData: any) => {
        for (let i = 0; i < 10; i++) {
          this.ELEMENT_DATA.push(responseData[i]);
        }
        this.dataSource = this.ELEMENT_DATA;

        console.log("ElementData", this.ELEMENT_DATA);
      });
  }
  
  ngOnInit() {
    this.getCovidDataByCountry();
  }

}
