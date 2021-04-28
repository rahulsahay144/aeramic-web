import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import * as constants from "../../constants";
import { Observable, of } from "rxjs";
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  step = 0;

  showPackages: boolean = false;
  selectedCity: string;

  //@ViewChild('accordion',{static:true}) packageAccordion: MatAccordion;

  slideConfig = {  
    slidesToShow: 3,  
    slidesToScroll: 1,  
    dots: false,  
    infinite: false,
    enabled: true,
    autoplay: false,
    arrows: true,
    centerMode: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    'responsive': [
      {
        'breakpoint': 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        'breakpoint': 920,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    // nextArrow: "<div class='nav-btn next-slide'></div>",
    // prevArrow: "<div class='nav-btn prev-slide'></div>"
  };  

  //packages: constants.IPackagesType[];

  packages: Observable<constants.IPackagesType[]>;
  
  constructor() { }

  ngOnInit(): void {
    // Default is Patna
    this.selectedCity = '1';

    this.packages = of([
      { name: constants.PatnaBudgetPackage.name.valueOf(), price: constants.PatnaBudgetPackage.price.valueOf(), content : constants.budgetPackageItems},
      { name: constants.PatnaBasicPackage.name.valueOf(), price: constants.PatnaBasicPackage.price.valueOf(), content : constants.basicPackageItems},
      { name: constants.PatnaClassicPackage.name.valueOf(), price: constants.PatnaClassicPackage.price.valueOf(), content : constants.classicPackageItems},
      { name: constants.PatnaPremiumPackage.name.valueOf(), price: constants.PatnaPremiumPackage.price.valueOf(), content : constants.classicPackageItems},
      { name: constants.PatnaRoyalePackage.name.valueOf(), price: constants.PatnaRoyalePackage.price.valueOf(), content : constants.classicPackageItems},
      { name: constants.PatnaImperiaPackage.name.valueOf(), price: constants.PatnaImperiaPackage.price.valueOf(), content : constants.classicPackageItems}
    ]);
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  closeStep(index: number) {
    if(this.step === index) {
      this.step = 0;
      //this.packageAccordion.closeAll();
    }
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  onSelectedCityChange($event: MatRadioChange) {
    if(this.selectedCity == '1') {

      this.packages = of([
        { name: constants.PatnaBudgetPackage.name.valueOf(), price: constants.PatnaBudgetPackage.price.valueOf(), content : constants.budgetPackageItems},
        { name: constants.PatnaBasicPackage.name.valueOf(), price: constants.PatnaBasicPackage.price.valueOf(), content : constants.basicPackageItems},
        { name: constants.PatnaClassicPackage.name.valueOf(), price: constants.PatnaClassicPackage.price.valueOf(), content : constants.classicPackageItems},
        { name: constants.PatnaPremiumPackage.name.valueOf(), price: constants.PatnaPremiumPackage.price.valueOf(), content : constants.classicPackageItems},
        { name: constants.PatnaRoyalePackage.name.valueOf(), price: constants.PatnaRoyalePackage.price.valueOf(), content : constants.classicPackageItems},
        { name: constants.PatnaImperiaPackage.name.valueOf(), price: constants.PatnaImperiaPackage.price.valueOf(), content : constants.classicPackageItems}
      ]);
    }
    else {
      this.packages = of([
        { name: constants.RanchiBudgetPackage.name.valueOf(), price: constants.RanchiBudgetPackage.price.valueOf(), content : constants.budgetPackageItems},
        { name: constants.RanchiBasicPackage.name.valueOf(), price: constants.RanchiBasicPackage.price.valueOf(), content : constants.basicPackageItems},
        { name: constants.RanchiClassicPackage.name.valueOf(), price: constants.RanchiClassicPackage.price.valueOf(), content : constants.classicPackageItems},
        { name: constants.RanchiPremiumPackage.name.valueOf(), price: constants.RanchiPremiumPackage.price.valueOf(), content : constants.classicPackageItems},
        { name: constants.RanchiRoyalePackage.name.valueOf(), price: constants.RanchiRoyalePackage.price.valueOf(), content : constants.classicPackageItems},
        { name: constants.RanchiImperiaPackage.name.valueOf(), price: constants.RanchiImperiaPackage.price.valueOf(), content : constants.classicPackageItems}
      ]);
    }
  }

}
