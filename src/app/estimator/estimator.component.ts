import { Component, OnInit, Inject, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import {BudgetPackage, BasicPackage, ClassicPackage, PremiumPackage, ImperiaPackage, CAR_PARKING_AREA, RoyalePackage} from '../constants';


interface IPackagesType {
  name: string;
  price: number;
  buildUpCost: number;
  carParkingPrice: number;
  carParkingCost: number;
  utilityCost: number;
  utilityPrice: number;
}

interface ICity {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['./estimator.component.scss']
})
export class EstimatorComponent implements OnInit {

  showBusy: boolean;
  showCalculations: boolean;

  // Calculator Input
  builtUpArea: number;
  noCarParking: number;
  utilityArea: number;
  city: String;
  carParkingArea: number = CAR_PARKING_AREA;

  cities: ICity[] = [
    {value: 'Patna', viewValue: 'Patna'},
    {value: 'Ranchi', viewValue: 'Ranchi'}
  ];

  calculationsSet1: IPackagesType[];
  calculationsSet2: IPackagesType[];

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Aeramic Constructions & Consultancy Pvt. Ltd. | Cost Estimator');
  }

  ngOnInit(): void {
    this.showCalculations = false;
  }

  onEstimateRequestSubmit(form: NgForm) {
    //this.showBusy = true;

    //Validate
    for (let key of Object.keys(form.control.controls)) {
      if(form.control.controls[key].errors) {
        return;
      }
    }

    this.calculationsSet1 = [
      {name: BudgetPackage.name.valueOf(), price: BudgetPackage.price.valueOf(), buildUpCost: (BudgetPackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: BudgetPackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * BudgetPackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * BudgetPackage.utilityPrice.valueOf()), utilityPrice: BudgetPackage.utilityPrice.valueOf()},
      {name: BasicPackage.name.valueOf(), price: BasicPackage.price.valueOf(), buildUpCost: (BasicPackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: BasicPackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * BasicPackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * BasicPackage.utilityPrice.valueOf()), utilityPrice: BasicPackage.utilityPrice.valueOf()},
      {name: ClassicPackage.name.valueOf(), price: ClassicPackage.price.valueOf(), buildUpCost: (ClassicPackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: ClassicPackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * ClassicPackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * ClassicPackage.utilityPrice.valueOf()), utilityPrice: ClassicPackage.utilityPrice.valueOf()},
    ]

    this.calculationsSet2 = [
      {name: PremiumPackage.name.valueOf(), price: PremiumPackage.price.valueOf(), buildUpCost: (PremiumPackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: PremiumPackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * PremiumPackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * PremiumPackage.utilityPrice.valueOf()), utilityPrice: PremiumPackage.utilityPrice.valueOf()},
      {name: RoyalePackage.name.valueOf(), price: RoyalePackage.price.valueOf(), buildUpCost: (RoyalePackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: RoyalePackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * RoyalePackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * RoyalePackage.utilityPrice.valueOf()), utilityPrice: RoyalePackage.utilityPrice.valueOf()},
      {name: ImperiaPackage.name.valueOf(), price: ImperiaPackage.price.valueOf(), buildUpCost: (ImperiaPackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: ImperiaPackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * ImperiaPackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * ImperiaPackage.utilityPrice.valueOf()), utilityPrice: ImperiaPackage.utilityPrice.valueOf()}
    ]

    this.showCalculations = true;
  }

}
