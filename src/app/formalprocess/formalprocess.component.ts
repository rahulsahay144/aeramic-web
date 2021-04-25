import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { animations } from "ngx-animations";

@Component({
  selector: 'app-formalprocess',
  templateUrl: './formalprocess.component.html',
  styleUrls: ['./formalprocess.component.scss']
})
export class FormalprocessComponent implements OnInit {
  animation = "fadeIn";
  animations = Object.keys(animations);
  time = 300;
  data = Array.apply(null, Array(100)).map(function(val, i) {
    return i;
  });

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
