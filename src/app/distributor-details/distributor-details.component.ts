import { Component, OnInit } from '@angular/core';
import { DistributorDetailsDto } from '../Model/DistributorDetailsDto';

@Component({
  selector: 'app-distributor-details',
  templateUrl: './distributor-details.component.html',
  styleUrls: ['./distributor-details.component.css']
})
export class DistributorDetailsComponent implements OnInit {

  
  distributordetails ;

  constructor() {

       this.distributordetails=new DistributorDetailsDto();
       this.distributordetails.distributor_Id=102
       this.distributordetails.distributor_Name="Manasi Gautam"
       this.distributordetails.distributor_Address="Mathura"
       this.distributordetails.distributor_Phn=8334545454
   }

  

  ngOnInit(): void {
  }

}
