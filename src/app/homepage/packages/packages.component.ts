import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import {BudgetPackage, BasicPackage, ClassicPackage, PremiumPackage, ImperiaPackage, RoyalePackage} from '../../constants';

interface IPackagesType {
  name: string;
  price: Number;
  content: IPackagesItems [];
}

interface IPackagesItems {
  step: Number;
  title: string;
  subItems : IPackagesSubItems[];
}

interface IPackagesSubItems {
  label: string;
  desc: string;
}

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

  budgetPackageItems: IPackagesItems[] = [
    {step: 1, title: 'Designs & Drawings', subItems: [ {label: 'Basic Elevation', desc: ''},  {label: 'Structural Design', desc: ''}]},
    {step: 2, title: 'Structure', subItems: [ {label: 'Aggregates', desc: '20mm & 40mm'},  
                                              {label: 'RCC Design Mix', desc: 'As per the structural designer recommendation'},
                                              {label: 'Ceiling Height', desc: '10 feet (Finished Floor level to Finished Floor level)'},
                                              {label: 'Steel', desc: 'Sunvik, Meenakshi, Kamdhenu or equivalent'},
                                              {label: 'Blocks', desc: 'Standard Solid Concrete blocks. 6 inch 4 inch'},
                                              {label: 'Cement', desc: 'Dalmia, Coromandel or Zuari or equivalent (Portland Pozzolona Cement)'}]},
    {step: 3, title: 'Kitchen', subItems: [ {label: 'Ceramic Wall Tiles, 2 feet above kitchen slab', desc: 'Upto ₹40 per Sqft'},  
                                              {label: 'Main Sink Faucet', desc: 'Upto ₹1300'},
                                              {label: 'Any Other Faucet & Accessories', desc: 'ISI Marked'},
                                              {label: 'Kitchen Sink', desc: 'Stainless Steel Single Sink worth ₹3000'}]},    
    {step: 4, title: 'Bathroom', subItems: [ {label: 'Bathroom doors', desc: 'Waterproof flush doors'},  
                                              {label: 'Bathroom Ceramic Wall Tiles with 7 feet height', desc: 'Upto ₹40 per Sqft'},
                                              {label: 'Sanitary ware & CP Fittings', desc: 'Upto ₹30000 per 1000 sqft of construction.'},
                                              {label: 'CPVC Pipe', desc: 'Astral or equivalent'}]},   
    {step: 5, title: 'Doors & Windows', subItems: [ {label: 'Main Door', desc: 'Flush Door With Veneer. Sal wood frame of 5 inch by 3 inch, worth ₹13000 including fixtures'},  
                                              {label: 'Internal Doors', desc: 'Membrane doors / Flush Door with Laminates upto ₹8000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch'},
                                              {label: 'Windows', desc: 'Aluminium Windows with glass shutters and mesh shutters(3 track with 1 mesh)'}]},
    {step: 6, title: 'Painting', subItems: [ {label: 'Interior Painting', desc: 'JK Putty + Tractor Emulsion or equivalent'},  
                                             {label: 'Exterior Painting', desc: 'Asian Primer + Ace Exterior Emulsion Paint or equivalent'}]},
    {step: 7, title: 'Flooring', subItems: [ {label: 'Living and Dining Flooring', desc: 'Tiles of value upto ₹50 per sqft'},  
                                             {label: 'Rooms and Kitchen Flooring', desc: 'Tiles upto ₹50 per sqft'},
                                             {label: 'Balcony and Open Areas Flooring', desc: 'Anti-skid tiles of value upto ₹40 per sqft'},
                                             {label: 'Staircase Flooring', desc: 'Sadarahalli Granite of value upto ₹ 70 per sqft'},
                                             {label: 'Parking Tiles', desc: 'Anti-skid tiles of value upto ₹40 per sqft'}]},
    {step: 8, title: 'Electrical', subItems: [ {label: 'Wires', desc: 'Fireproof wires by Finolex'},  
                                             {label: 'Switches & Sockets', desc: 'Anchor Roma'}]},
    {step: 9, title: 'Miscellaneous', subItems: [ {label: 'Overhead Tank', desc: 'Sintex Double Layered 1000 ltrs'},  
                                             {label: 'Underground Sump', desc: '4000 litres'},
                                             {label: 'Staircase Railing', desc: 'MS Railing'}]},  
    {step: 10, title: 'Customisation Costs', subItems: []},                                                                                                                                               
  ];

  basicPackageItems: IPackagesItems[] = [
    {step: 1, title: 'Designs & Drawings', subItems: [ {label: '3D Elevation', desc: ''},  {label: 'Structural Design', desc: ''}]},
    {step: 2, title: 'Structure', subItems: [ {label: 'Aggregates', desc: '20mm & 40mm'},  
                                              {label: 'RCC Design Mix', desc: 'As per the structural designer recommendation'},
                                              {label: 'Ceiling Height', desc: '10 feet (Finished Floor level to Finished Floor level)'},
                                              {label: 'Steel', desc: 'Sunvik, Meenakshi, Kamdhenu or equivalent'},
                                              {label: 'Blocks', desc: 'Standard Solid Concrete blocks. 6 inch 4 inch'},
                                              {label: 'Cement', desc: 'ACC, Birla  or equivalent of Grade - 43 or 53'}]},
    {step: 3, title: 'Kitchen', subItems: [ {label: 'Ceramic Wall Tiles, 2 feet above kitchen slab', desc: 'Upto ₹50 per Sqft'},  
                                              {label: 'Main Sink Faucet', desc: 'Upto ₹1500'},
                                              {label: 'Any Other Faucet & Accessories', desc: 'ISI Marked'},
                                              {label: 'Kitchen Sink', desc: 'Stainless Steel Single Sink worth ₹4000'}]},    
    {step: 4, title: 'Bathroom', subItems: [ {label: 'Bathroom doors', desc: 'Waterproof flush doors'},  
                                              {label: 'Bathroom Ceramic Wall Tiles with 7 feet height', desc: 'Upto ₹50 per Sqft'},
                                              {label: 'Sanitary ware & CP Fittings', desc: 'Upto ₹40000 per 1000 sqft of construction.'},
                                              {label: 'CPVC Pipe', desc: 'Astral or equivalent'}]},   
    {step: 5, title: 'Doors & Windows', subItems: [ {label: 'Main Door', desc: 'Flush Door With Veneer. Sal wood frame of 5 inch by 3 inch, worth ₹20000 including fixtures'},  
                                              {label: 'Internal Doors', desc: 'Membrane doors / Flush Door with Laminates upto ₹8000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch'},
                                              {label: 'Windows', desc: 'Aluminium Windows with glass shutters and mesh shutters(3 track with 1 mesh)'}]},
    {step: 6, title: 'Painting', subItems: [ {label: 'Interior Painting', desc: 'JK Putty + Tractor Shyne Emulsion or equivalent'},  
                                             {label: 'Exterior Painting', desc: 'Asian Primer + Ace Exterior Emulsion Paint or equivalent'}]},
    {step: 7, title: 'Flooring', subItems: [ {label: 'Living and Dining Flooring', desc: 'Tiles of value upto ₹70 per sqft'},  
                                             {label: 'Rooms and Kitchen Flooring', desc: 'Tiles upto ₹60 per sqft'},
                                             {label: 'Balcony and Open Areas Flooring', desc: 'Anti-skid tiles of value upto ₹50 per sqft'},
                                             {label: 'Staircase Flooring', desc: 'Sadarahalli Granite of value upto ₹ 70 per sqft'},
                                             {label: 'Parking Tiles', desc: 'Anti-skid tiles of value upto ₹50 per sqft'}]},
    {step: 8, title: 'Electrical', subItems: [ {label: 'Wires', desc: 'Fireproof wires by Finolex'},  
                                             {label: 'Switches & Sockets', desc: 'Anchor Roma'}]},
    {step: 9, title: 'Miscellaneous', subItems: [ {label: 'Overhead Tank', desc: 'Sintex Double Layered 1500 ltrs'},  
                                             {label: 'Underground Sump', desc: '6000 litres'},
                                             {label: 'Staircase Railing', desc: 'MS Railing'},
                                             {label: 'Window Grills', desc: 'Basic MS Grills with Enamel Paint at ₹110 per sqft'}]},  
    {step: 10, title: 'Customisation Costs', subItems: []},   
  ];

  classicPackageItems: IPackagesItems[] = [
    {step: 1, title: 'Designs & Drawings', subItems: [ {label: '3D Elevation', desc: ''},  {label: 'Structural Design', desc: ''}]},
    {step: 2, title: 'Structure', subItems: [ {label: 'Aggregates', desc: '20mm & 40mm'},  
                                              {label: 'RCC Design Mix', desc: 'As per the structural designer recommendation'},
                                              {label: 'Ceiling Height', desc: '10 feet (Finished Floor level to Finished Floor level)'},
                                              {label: 'Steel', desc: 'JSW steel or equivalent'},
                                              {label: 'Blocks', desc: 'Standard Solid Concrete blocks. 6 inch 4 inch'},
                                              {label: 'Cement', desc: 'ACC, Birla  or equivalent of Grade - 43 or 53'}]},
    {step: 3, title: 'Kitchen', subItems: [ {label: 'Ceramic Wall Tiles, 2 feet above kitchen slab', desc: 'Upto ₹60 per Sqft'},  
                                              {label: 'Main Sink Faucet', desc: 'Upto ₹2000'},
                                              {label: 'Any Other Faucet & Accessories', desc: 'Jaquar/Parryware/Hindware'},
                                              {label: 'Kitchen Sink', desc: 'Stainless Steel Single Sink worth ₹6000'}]},    
    {step: 4, title: 'Bathroom', subItems: [ {label: 'Bathroom doors', desc: 'Waterproof flush doors'},  
                                              {label: 'Bathroom Ceramic Wall Tiles with 7 feet height', desc: 'Upto ₹60 per Sqft'},
                                              {label: 'Sanitary ware & CP Fittings', desc: 'Upto ₹50000 per 1000 sqft of construction.'},
                                              {label: 'CPVC Pipe', desc: 'Ashirwad / Supreme or equivalent'}]},   
    {step: 5, title: 'Doors & Windows', subItems: [ {label: 'Main Door', desc: 'Flush Door With Veneer. Sal wood frame of 5 inch by 3 inch, worth ₹30000 including fixtures'},  
                                              {label: 'Internal Doors', desc: 'Membrane doors / Flush Door with Laminates upto ₹8000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch'},
                                              {label: 'Windows', desc: 'UPVC Windows with glass and mesh shutters (3 track with 1 mesh)'}]},
    {step: 6, title: 'Painting', subItems: [ {label: 'Interior Painting', desc: 'JK Putty + Tractor Shyne Emulsion or equivalent'},  
                                             {label: 'Exterior Painting', desc: 'Asian Primer + Apex Exterior Emulsion Paint or equivalent'}]},
    {step: 7, title: 'Flooring', subItems: [ {label: 'Living and Dining Flooring', desc: 'Tiles of value upto ₹100 per sqft'},  
                                             {label: 'Rooms and Kitchen Flooring', desc: 'Tiles upto ₹80 per sqft'},
                                             {label: 'Balcony and Open Areas Flooring', desc: 'Anti-skid tiles of value upto ₹60 per sqft'},
                                             {label: 'Staircase Flooring', desc: 'Sadarahalli Granite of value upto ₹ 80 per sqft'},
                                             {label: 'Parking Tiles', desc: 'Anti-skid tiles of value upto ₹50 per sqft'}]},
    {step: 8, title: 'Electrical', subItems: [ {label: 'Wires', desc: 'Fireproof wires by Finolex'},  
                                             {label: 'Switches & Sockets', desc: 'Anchor Roma'}]},
    {step: 9, title: 'Miscellaneous', subItems: [ {label: 'Overhead Tank', desc: 'Sintex Double Layered 1500 ltrs'},  
                                             {label: 'Underground Sump', desc: '6000 litres'},
                                             {label: 'Staircase Railing', desc: 'MS Railing'},
                                             {label: 'Window Grills', desc: 'Basic MS Grills with Enamel Paint at ₹110 per sqft'}]},  
    {step: 10, title: 'Customisation Costs', subItems: []},   
  ];

  packages: IPackagesType[] = [
    { name: BudgetPackage.name.valueOf(), price: BudgetPackage.price.valueOf(), content : this.budgetPackageItems},
    { name: BasicPackage.name.valueOf(), price: BasicPackage.price.valueOf(), content : this.basicPackageItems},
    { name: ClassicPackage.name.valueOf(), price: ClassicPackage.price.valueOf(), content : this.classicPackageItems},
    { name: PremiumPackage.name.valueOf(), price: PremiumPackage.price.valueOf(), content : this.classicPackageItems},
    { name: RoyalePackage.name.valueOf(), price: RoyalePackage.price.valueOf(), content : this.classicPackageItems},
    { name: ImperiaPackage.name.valueOf(), price: ImperiaPackage.price.valueOf(), content : this.classicPackageItems}
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
