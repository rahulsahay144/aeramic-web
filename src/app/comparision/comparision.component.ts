import { Component, OnInit } from '@angular/core';
import * as constants from "../constants";

@Component({
  selector: 'app-comparision',
  templateUrl: './comparision.component.html',
  styleUrls: ['./comparision.component.scss']
})
export class ComparisionComponent implements OnInit {
  step = 0;
  selectedCity: string;

  packages = [
    { value: constants.PatnaBudgetPackage.name.valueOf(), text: constants.PatnaBudgetPackage.name.valueOf() },
    { value: constants.PatnaBasicPackage.name.valueOf(), text: constants.PatnaBasicPackage.name.valueOf() },
    { value: constants.PatnaClassicPackage.name.valueOf(), text: constants.PatnaClassicPackage.name.valueOf() },
    { value: constants.PatnaPremiumPackage.name.valueOf(), text: constants.PatnaPremiumPackage.name.valueOf() },
    { value: constants.PatnaRoyalePackage.name.valueOf(), text: constants.PatnaRoyalePackage.name.valueOf() },
    { value: constants.PatnaImperiaPackage.name.valueOf(), text: constants.PatnaImperiaPackage.name.valueOf() }
  ];

  selected1: any;
  selected2: any;

  //Default
  package1 : constants.IPackagesType;
  package2 : constants.IPackagesType;
  
  constructor() { }

  ngOnInit(): void {
    // Default is Patna
    this.selectedCity = '1';

    this.selected1 = constants.PatnaBudgetPackage.name.valueOf();
    this.selected2 = constants.PatnaBasicPackage.name.valueOf();

    this.package1 = { name: constants.PatnaBudgetPackage.name.valueOf(), price: constants.PatnaBudgetPackage.price.valueOf(), content : constants.budgetPackageItems};
    this.package2 = { name: constants.PatnaBasicPackage.name.valueOf(), price: constants.PatnaBasicPackage.price.valueOf(), content : constants.basicPackageItems};
  }

  onFirstSelectionChange() {
    if(this.selectedCity == '1') {
      if(this.selected1 == constants.PatnaBudgetPackage.name.valueOf()) {
        this.package1 = { name: constants.PatnaBudgetPackage.name.valueOf(), price: constants.PatnaBudgetPackage.price.valueOf(), content : constants.budgetPackageItems};
      }
      else if(this.selected1 == constants.PatnaBasicPackage.name.valueOf()) {
        this.package1 = { name: constants.PatnaBasicPackage.name.valueOf(), price: constants.PatnaBasicPackage.price.valueOf(), content : constants.basicPackageItems};
      }
      else if(this.selected1 == constants.PatnaClassicPackage.name.valueOf()) {
        this.package1 = { name: constants.PatnaClassicPackage.name.valueOf(), price: constants.PatnaClassicPackage.price.valueOf(), content : constants.classicPackageItems};
      }
      else if(this.selected1 == constants.PatnaPremiumPackage.name.valueOf()) {
        this.package1 = { name: constants.PatnaPremiumPackage.name.valueOf(), price: constants.PatnaPremiumPackage.price.valueOf(), content : constants.classicPackageItems};
      }
      else if(this.selected1 == constants.PatnaRoyalePackage.name.valueOf()) {
        this.package1 = { name: constants.PatnaRoyalePackage.name.valueOf(), price: constants.PatnaRoyalePackage.price.valueOf(), content : constants.classicPackageItems};
      }
      else if(this.selected1 == constants.PatnaImperiaPackage.name.valueOf()) {
        this.package1 = { name: constants.PatnaImperiaPackage.name.valueOf(), price: constants.PatnaImperiaPackage.price.valueOf(), content : constants.classicPackageItems};
      }
    }
    else {
      if(this.selected1 == constants.RanchiBudgetPackage.name.valueOf()) {
        this.package1 = { name: constants.RanchiBudgetPackage.name.valueOf(), price: constants.RanchiBudgetPackage.price.valueOf(), content : constants.budgetPackageItems};
      }
      else if(this.selected1 == constants.RanchiBasicPackage.name.valueOf()) {
        this.package1 = { name: constants.RanchiBasicPackage.name.valueOf(), price: constants.RanchiBasicPackage.price.valueOf(), content : constants.basicPackageItems};
      }
      else if(this.selected1 == constants.RanchiClassicPackage.name.valueOf()) {
        this.package1 = { name: constants.RanchiClassicPackage.name.valueOf(), price: constants.RanchiClassicPackage.price.valueOf(), content : constants.classicPackageItems};
      }
      else if(this.selected1 == constants.RanchiPremiumPackage.name.valueOf()) {
        this.package1 = { name: constants.RanchiPremiumPackage.name.valueOf(), price: constants.RanchiPremiumPackage.price.valueOf(), content : constants.classicPackageItems};
      }
      else if(this.selected1 == constants.RanchiRoyalePackage.name.valueOf()) {
        this.package1 = { name: constants.RanchiRoyalePackage.name.valueOf(), price: constants.RanchiRoyalePackage.price.valueOf(), content : constants.classicPackageItems};
      }
      else if(this.selected1 == constants.RanchiImperiaPackage.name.valueOf()) {
        this.package1 = { name: constants.RanchiImperiaPackage.name.valueOf(), price: constants.RanchiImperiaPackage.price.valueOf(), content : constants.classicPackageItems};
      }
    }
    
  }

  onSecondSelectionChange() {
    if(this.selectedCity == '1') {
      if(this.selected2 == constants.PatnaBudgetPackage.name.valueOf()) {
        this.package2 = { name: constants.PatnaBudgetPackage.name.valueOf(), price: constants.PatnaBudgetPackage.price.valueOf(), content : constants.budgetPackageItems};
      }
      else if(this.selected2 == constants.PatnaBasicPackage.name.valueOf()) {
        this.package2 = { name: constants.PatnaBasicPackage.name.valueOf(), price: constants.PatnaBasicPackage.price.valueOf(), content : constants.basicPackageItems};
      }
      else if(this.selected2 == constants.PatnaClassicPackage.name.valueOf()) {
        this.package2 = { name: constants.PatnaClassicPackage.name.valueOf(), price: constants.PatnaClassicPackage.price.valueOf(), content : constants.classicPackageItems};
      }
      else if(this.selected2 == constants.PatnaPremiumPackage.name.valueOf()) {
        this.package2 = { name: constants.PatnaPremiumPackage.name.valueOf(), price: constants.PatnaPremiumPackage.price.valueOf(), content : constants.classicPackageItems};
      }
      else if(this.selected2 == constants.PatnaRoyalePackage.name.valueOf()) {
        this.package2 = { name: constants.PatnaRoyalePackage.name.valueOf(), price: constants.PatnaRoyalePackage.price.valueOf(), content : constants.classicPackageItems};
      }
      else if(this.selected2 == constants.PatnaImperiaPackage.name.valueOf()) {
        this.package2 = { name: constants.PatnaImperiaPackage.name.valueOf(), price: constants.PatnaImperiaPackage.price.valueOf(), content : constants.classicPackageItems};
      }
    }
    else {
      if(this.selected2 == constants.RanchiBudgetPackage.name.valueOf()) {
        this.package2 = { name: constants.RanchiBudgetPackage.name.valueOf(), price: constants.RanchiBudgetPackage.price.valueOf(), content : constants.budgetPackageItems};
      }
      else if(this.selected2 == constants.RanchiBasicPackage.name.valueOf()) {
        this.package2 = { name: constants.RanchiBasicPackage.name.valueOf(), price: constants.RanchiBasicPackage.price.valueOf(), content : constants.basicPackageItems};
      }
      else if(this.selected2 == constants.RanchiClassicPackage.name.valueOf()) {
        this.package2 = { name: constants.RanchiClassicPackage.name.valueOf(), price: constants.RanchiClassicPackage.price.valueOf(), content : constants.classicPackageItems};
      }
      else if(this.selected2 == constants.RanchiPremiumPackage.name.valueOf()) {
        this.package2 = { name: constants.RanchiPremiumPackage.name.valueOf(), price: constants.RanchiPremiumPackage.price.valueOf(), content : constants.classicPackageItems};
      }
      else if(this.selected2 == constants.RanchiRoyalePackage.name.valueOf()) {
        this.package2 = { name: constants.RanchiRoyalePackage.name.valueOf(), price: constants.RanchiRoyalePackage.price.valueOf(), content : constants.classicPackageItems};
      }
      else if(this.selected2 == constants.RanchiImperiaPackage.name.valueOf()) {
        this.package2 = { name: constants.RanchiImperiaPackage.name.valueOf(), price: constants.RanchiImperiaPackage.price.valueOf(), content : constants.classicPackageItems};
      }
    }
    
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

  onSelectedCityChange() {
    this.onFirstSelectionChange();
    this.onSecondSelectionChange();
  }

}
