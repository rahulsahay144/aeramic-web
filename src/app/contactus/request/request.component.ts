import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/api.service';

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
  selectedCity: string = "Patna";

  email: string;
  formsubmitted: boolean;

  @Input() initForm: boolean;

  showBusy: boolean;

  constructor(private httpClient: HttpClient, private toastr: ToastrService, private apiService: ApiService) { }

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

    let postData: any = {
      "location": this.selectedCity,
      "contactName": form.value.name,
      "userPhone": form.value.phone,
      "toEmail": form.value.email
    }


    // Get Property Detailed Data
    this.apiService.sendContactUsEmail(postData)
    .then((res) => {
      
      this.toastr.success("Request Posted Successfully!");
      this.formsubmitted = true;
      this.showBusy = false;
    })
    .catch((err) => {
        console.log(err);
        
        this.toastr.error("Request Posted Failed, Please try again!");
        this.formsubmitted = false;
        this.showBusy = false;
    });
  }

}
