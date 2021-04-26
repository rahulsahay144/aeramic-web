import { Component, OnInit } from '@angular/core';
import * as constants from "../constants";

@Component({
  selector: 'app-comparision',
  templateUrl: './comparision.component.html',
  styleUrls: ['./comparision.component.scss']
})
export class ComparisionComponent implements OnInit {
  step = 0;

  packages = [
    { value: constants.BudgetPackage.name.valueOf(), text: constants.BudgetPackage.name.valueOf() },
    { value: constants.BasicPackage.name.valueOf(), text: constants.BasicPackage.name.valueOf() },
    { value: constants.ClassicPackage.name.valueOf(), text: constants.ClassicPackage.name.valueOf() },
    { value: constants.PremiumPackage.name.valueOf(), text: constants.PremiumPackage.name.valueOf() },
    { value: constants.RoyalePackage.name.valueOf(), text: constants.RoyalePackage.name.valueOf() },
    { value: constants.ImperiaPackage.name.valueOf(), text: constants.ImperiaPackage.name.valueOf() }
  ];

  selected1: any;
  selected2: any;

  //Default
  package1 : constants.IPackagesType;
  package2 : constants.IPackagesType;
  
  constructor() { }

  ngOnInit(): void {
    this.selected1 = constants.BudgetPackage.name.valueOf();
    this.selected2 = constants.BasicPackage.name.valueOf();

    this.package1 = { name: constants.BudgetPackage.name.valueOf(), price: constants.BudgetPackage.price.valueOf(), content : constants.budgetPackageItems};
    this.package2 = { name: constants.BasicPackage.name.valueOf(), price: constants.BasicPackage.price.valueOf(), content : constants.basicPackageItems};
  }

  onFirstSelectionChange() {
    if(this.selected1 == constants.BudgetPackage.name.valueOf()) {
      this.package1 = { name: constants.BudgetPackage.name.valueOf(), price: constants.BudgetPackage.price.valueOf(), content : constants.budgetPackageItems};
    }
    else if(this.selected1 == constants.BasicPackage.name.valueOf()) {
      this.package1 = { name: constants.BasicPackage.name.valueOf(), price: constants.BasicPackage.price.valueOf(), content : constants.basicPackageItems};
    }
    else if(this.selected1 == constants.ClassicPackage.name.valueOf()) {
      this.package1 = { name: constants.ClassicPackage.name.valueOf(), price: constants.ClassicPackage.price.valueOf(), content : constants.classicPackageItems};
    }
    else if(this.selected1 == constants.PremiumPackage.name.valueOf()) {
      this.package1 = { name: constants.PremiumPackage.name.valueOf(), price: constants.PremiumPackage.price.valueOf(), content : constants.classicPackageItems};
    }
    else if(this.selected1 == constants.RoyalePackage.name.valueOf()) {
      this.package1 = { name: constants.RoyalePackage.name.valueOf(), price: constants.RoyalePackage.price.valueOf(), content : constants.classicPackageItems};
    }
    else if(this.selected1 == constants.ImperiaPackage.name.valueOf()) {
      this.package1 = { name: constants.ImperiaPackage.name.valueOf(), price: constants.ImperiaPackage.price.valueOf(), content : constants.classicPackageItems};
    }
  }

  onSecondSelectionChange() {
    if(this.selected2 == constants.BudgetPackage.name.valueOf()) {
      this.package2 = { name: constants.BudgetPackage.name.valueOf(), price: constants.BudgetPackage.price.valueOf(), content : constants.budgetPackageItems};
    }
    else if(this.selected2 == constants.BasicPackage.name.valueOf()) {
      this.package2 = { name: constants.BasicPackage.name.valueOf(), price: constants.BasicPackage.price.valueOf(), content : constants.basicPackageItems};
    }
    else if(this.selected2 == constants.ClassicPackage.name.valueOf()) {
      this.package2 = { name: constants.ClassicPackage.name.valueOf(), price: constants.ClassicPackage.price.valueOf(), content : constants.classicPackageItems};
    }
    else if(this.selected2 == constants.PremiumPackage.name.valueOf()) {
      this.package2 = { name: constants.PremiumPackage.name.valueOf(), price: constants.PremiumPackage.price.valueOf(), content : constants.classicPackageItems};
    }
    else if(this.selected2 == constants.RoyalePackage.name.valueOf()) {
      this.package2 = { name: constants.RoyalePackage.name.valueOf(), price: constants.RoyalePackage.price.valueOf(), content : constants.classicPackageItems};
    }
    else if(this.selected2 == constants.ImperiaPackage.name.valueOf()) {
      this.package2 = { name: constants.ImperiaPackage.name.valueOf(), price: constants.ImperiaPackage.price.valueOf(), content : constants.classicPackageItems};
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

}
