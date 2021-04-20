import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

interface ICity {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  cities: ICity[] = [
    {value: 'Patna', viewValue: 'Patna'},
    {value: 'Ranchi', viewValue: 'Ranchi'}
  ];

  hide = true;

  email: string;
  formsubmitted: boolean;

  showBusy: boolean;

  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formsubmitted = false;
  }

  onEstimateRequestSubmit(form: NgForm) {
    //Validate
    for (let key of Object.keys(form.control.controls)) {
      if(form.control.controls[key].errors) {
        return;
      }
    }

    this.showBusy = true;


    this.toastr.success("Request Posted Successfully!");
    this.formsubmitted = true;
    this.showBusy = false;

    
  }

}
