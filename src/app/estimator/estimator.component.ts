import { Component, OnInit, Inject, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  builtUpArea: Number;
  noCarParking: Number;
  utilityArea: Number;
  city: String;

  cities: ICity[] = [
    {value: 'Patna', viewValue: 'Patna'},
    {value: 'Ranchi', viewValue: 'Ranchi'}
  ];

  constructor() { }

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

    this.showCalculations = true;
  }

}
