import { Component, OnInit, Inject, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import * as constants from '../constants';


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
  city: String = "Patna";
  carParkingArea: number = constants.CAR_PARKING_AREA;

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

    this.calculate();
    this.showCalculations = true;
  }

  onCitySelectionChange () {
    this.calculate();
  }

  calculate() {

    if(this.city == "Patna") {
      this.calculationsSet1 = [
        {name: constants.PatnaBudgetPackage.name.valueOf(), price: constants.PatnaBudgetPackage.price.valueOf(), buildUpCost: (constants.PatnaBudgetPackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: constants.PatnaBudgetPackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * constants.PatnaBudgetPackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * constants.PatnaBudgetPackage.utilityPrice.valueOf()), utilityPrice: constants.PatnaBudgetPackage.utilityPrice.valueOf()},
        {name: constants.PatnaBasicPackage.name.valueOf(), price: constants.PatnaBasicPackage.price.valueOf(), buildUpCost: (constants.PatnaBasicPackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: constants.PatnaBasicPackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * constants.PatnaBasicPackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * constants.PatnaBasicPackage.utilityPrice.valueOf()), utilityPrice: constants.PatnaBasicPackage.utilityPrice.valueOf()},
        {name: constants.PatnaClassicPackage.name.valueOf(), price: constants.PatnaClassicPackage.price.valueOf(), buildUpCost: (constants.PatnaClassicPackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: constants.PatnaClassicPackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * constants.PatnaClassicPackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * constants.PatnaClassicPackage.utilityPrice.valueOf()), utilityPrice: constants.PatnaClassicPackage.utilityPrice.valueOf()},
      ]
  
      this.calculationsSet2 = [
        {name: constants.PatnaPremiumPackage.name.valueOf(), price: constants.PatnaPremiumPackage.price.valueOf(), buildUpCost: (constants.PatnaPremiumPackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: constants.PatnaPremiumPackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * constants.PatnaPremiumPackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * constants.PatnaPremiumPackage.utilityPrice.valueOf()), utilityPrice: constants.PatnaPremiumPackage.utilityPrice.valueOf()},
        {name: constants.PatnaRoyalePackage.name.valueOf(), price: constants.PatnaRoyalePackage.price.valueOf(), buildUpCost: (constants.PatnaRoyalePackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: constants.PatnaRoyalePackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * constants.PatnaRoyalePackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * constants.PatnaRoyalePackage.utilityPrice.valueOf()), utilityPrice: constants.PatnaRoyalePackage.utilityPrice.valueOf()},
        {name: constants.PatnaImperiaPackage.name.valueOf(), price: constants.PatnaImperiaPackage.price.valueOf(), buildUpCost: (constants.PatnaImperiaPackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: constants.PatnaImperiaPackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * constants.PatnaImperiaPackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * constants.PatnaImperiaPackage.utilityPrice.valueOf()), utilityPrice: constants.PatnaImperiaPackage.utilityPrice.valueOf()}
      ]
    }
    else {
      this.calculationsSet1 = [
        {name: constants.RanchiBudgetPackage.name.valueOf(), price: constants.RanchiBudgetPackage.price.valueOf(), buildUpCost: (constants.RanchiBudgetPackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: constants.RanchiBudgetPackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * constants.RanchiBudgetPackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * constants.RanchiBudgetPackage.utilityPrice.valueOf()), utilityPrice: constants.RanchiBudgetPackage.utilityPrice.valueOf()},
        {name: constants.RanchiBasicPackage.name.valueOf(), price: constants.RanchiBasicPackage.price.valueOf(), buildUpCost: (constants.RanchiBasicPackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: constants.RanchiBasicPackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * constants.RanchiBasicPackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * constants.RanchiBasicPackage.utilityPrice.valueOf()), utilityPrice: constants.RanchiBasicPackage.utilityPrice.valueOf()},
        {name: constants.RanchiClassicPackage.name.valueOf(), price: constants.RanchiClassicPackage.price.valueOf(), buildUpCost: (constants.RanchiClassicPackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: constants.RanchiClassicPackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * constants.RanchiClassicPackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * constants.RanchiClassicPackage.utilityPrice.valueOf()), utilityPrice: constants.RanchiClassicPackage.utilityPrice.valueOf()},
      ]
  
      this.calculationsSet2 = [
        {name: constants.RanchiPremiumPackage.name.valueOf(), price: constants.RanchiPremiumPackage.price.valueOf(), buildUpCost: (constants.RanchiPremiumPackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: constants.RanchiPremiumPackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * constants.RanchiPremiumPackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * constants.RanchiPremiumPackage.utilityPrice.valueOf()), utilityPrice: constants.RanchiPremiumPackage.utilityPrice.valueOf()},
        {name: constants.RanchiRoyalePackage.name.valueOf(), price: constants.RanchiRoyalePackage.price.valueOf(), buildUpCost: (constants.RanchiRoyalePackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: constants.RanchiRoyalePackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * constants.RanchiRoyalePackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * constants.RanchiRoyalePackage.utilityPrice.valueOf()), utilityPrice: constants.RanchiRoyalePackage.utilityPrice.valueOf()},
        {name: constants.RanchiImperiaPackage.name.valueOf(), price: constants.RanchiImperiaPackage.price.valueOf(), buildUpCost: (constants.RanchiImperiaPackage.price.valueOf() * (this.builtUpArea * 0.8)), carParkingPrice: constants.RanchiImperiaPackage.carParkingPrice.valueOf(), carParkingCost: (this.noCarParking * this.carParkingArea * constants.RanchiImperiaPackage.carParkingPrice.valueOf()), utilityCost: (this.utilityArea * constants.RanchiImperiaPackage.utilityPrice.valueOf()), utilityPrice: constants.RanchiImperiaPackage.utilityPrice.valueOf()}
      ]
    }
  }

}
