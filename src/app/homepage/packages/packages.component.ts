import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import * as constants from "../../constants";

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  step = 0;

  showPackages: boolean = false;

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

  packages: constants.IPackagesType[] = [
    { name: constants.BudgetPackage.name.valueOf(), price: constants.BudgetPackage.price.valueOf(), content : constants.budgetPackageItems},
    { name: constants.BasicPackage.name.valueOf(), price: constants.BasicPackage.price.valueOf(), content : constants.basicPackageItems},
    { name: constants.ClassicPackage.name.valueOf(), price: constants.ClassicPackage.price.valueOf(), content : constants.classicPackageItems},
    { name: constants.PremiumPackage.name.valueOf(), price: constants.PremiumPackage.price.valueOf(), content : constants.classicPackageItems},
    { name: constants.RoyalePackage.name.valueOf(), price: constants.RoyalePackage.price.valueOf(), content : constants.classicPackageItems},
    { name: constants.ImperiaPackage.name.valueOf(), price: constants.ImperiaPackage.price.valueOf(), content : constants.classicPackageItems}
  ];

  constructor() { }

  ngOnInit(): void {
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

}
