/**
 * Patna
 */
export enum PatnaBudgetPackage {
    name = 'Budget Package',
    price = 1585,
    carParkingPrice = 951,
    utilityPrice = 951
}

export enum PatnaBasicPackage {
    name = 'Basic Package',
    price = 1680,
    carParkingPrice = 1008,
    utilityPrice = 1008
}

export enum PatnaClassicPackage {
    name = 'Classic Package',
    price = 1830,
    carParkingPrice = 1098,
    utilityPrice = 1098
}

export enum PatnaPremiumPackage {
    name = 'Premium Package',
    price = 1920,
    carParkingPrice = 1152,
    utilityPrice = 1152
}

export enum PatnaRoyalePackage {
    name = 'Royale Package',
    price = 2040,
    carParkingPrice = 1224,
    utilityPrice = 1224
}

export enum PatnaImperiaPackage {
    name = 'Imperia Package',
    price = 2200,
    carParkingPrice = 1320,
    utilityPrice = 1320
}

/**
 * Ranchi
 */
 export enum RanchiBudgetPackage {
    name = 'Budget Package',
    price = 1525,
    carParkingPrice = 951,
    utilityPrice = 951
}

export enum RanchiBasicPackage {
    name = 'Basic Package',
    price = 1630,
    carParkingPrice = 1008,
    utilityPrice = 1008
}

export enum RanchiClassicPackage {
    name = 'Classic Package',
    price = 1810,
    carParkingPrice = 1098,
    utilityPrice = 1098
}

export enum RanchiPremiumPackage {
    name = 'Premium Package',
    price = 1900,
    carParkingPrice = 1152,
    utilityPrice = 1152
}

export enum RanchiRoyalePackage {
    name = 'Royale Package',
    price = 2040,
    carParkingPrice = 1224,
    utilityPrice = 1224
}

export enum RanchiImperiaPackage {
    name = 'Imperia Package',
    price = 2200,
    carParkingPrice = 1320,
    utilityPrice = 1320
}

export const CAR_PARKING_AREA: number = 130;

export interface IPackagesType {
    name: string;
    price: Number;
    content: IPackagesItems [];
}
  
export interface IPackagesItems {
    step: Number;
    title: string;
    subItems : IPackagesSubItems[];
}
  
export interface IPackagesSubItems {
    label: string;
    desc: string;
}

export const budgetPackageItems: IPackagesItems[] = [
    {step: 1, title: 'Designs & Drawings', subItems: [ {label: 'Basic Elevation', desc: ''},  {label: 'Structural Design', desc: ''}]},
    {step: 2, title: 'Structure', subItems: [ {label: 'Aggregates', desc: '20mm & 40mm'},  
                                              {label: 'RCC Design Mix', desc: 'As per the structural designer recommendation'},
                                              {label: 'Ceiling Height', desc: '10 feet (Finished Floor level to Finished Floor level)'},
                                              {label: 'Steel', desc: 'Sunvik, Meenakshi, Kamdhenu or equivalent'},
                                              {label: 'Blocks', desc: 'Standard Solid Concrete blocks. 6 inch 4 inch'},
                                              {label: 'Cement', desc: 'Dalmia, Coromandel or Zuari or equivalent (Portland Pozzolona Cement)'}]},
    {step: 3, title: 'Kitchen', subItems: [ {label: 'Ceramic Wall Tiles, 2 feet above kitchen slab', desc: 'Upto ???40 per Sqft'},  
                                              {label: 'Main Sink Faucet', desc: 'Upto ???1300'},
                                              {label: 'Any Other Faucet & Accessories', desc: 'ISI Marked'},
                                              {label: 'Kitchen Sink', desc: 'Stainless Steel Single Sink worth ???3000'}]},    
    {step: 4, title: 'Bathroom', subItems: [ {label: 'Bathroom doors', desc: 'Waterproof flush doors'},  
                                              {label: 'Bathroom Ceramic Wall Tiles with 7 feet height', desc: 'Upto ???40 per Sqft'},
                                              {label: 'Sanitary ware & CP Fittings', desc: 'Upto ???30000 per 1000 sqft of construction.'},
                                              {label: 'CPVC Pipe', desc: 'Astral or equivalent'}]},   
    {step: 5, title: 'Doors & Windows', subItems: [ {label: 'Main Door', desc: 'Flush Door With Veneer. Sal wood frame of 5 inch by 3 inch, worth ???13000 including fixtures'},  
                                              {label: 'Internal Doors', desc: 'Membrane doors / Flush Door with Laminates upto ???8000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch'},
                                              {label: 'Windows', desc: 'Aluminium Windows with glass shutters and mesh shutters(3 track with 1 mesh)'}]},
    {step: 6, title: 'Painting', subItems: [ {label: 'Interior Painting', desc: 'JK Putty + Tractor Emulsion or equivalent'},  
                                             {label: 'Exterior Painting', desc: 'Asian Primer + Ace Exterior Emulsion Paint or equivalent'}]},
    {step: 7, title: 'Flooring', subItems: [ {label: 'Living and Dining Flooring', desc: 'Tiles of value upto ???50 per sqft'},  
                                             {label: 'Rooms and Kitchen Flooring', desc: 'Tiles upto ???50 per sqft'},
                                             {label: 'Balcony and Open Areas Flooring', desc: 'Anti-skid tiles of value upto ???40 per sqft'},
                                             {label: 'Staircase Flooring', desc: 'Sadarahalli Granite of value upto ??? 70 per sqft'},
                                             {label: 'Parking Tiles', desc: 'Anti-skid tiles of value upto ???40 per sqft'}]},
    {step: 8, title: 'Electrical', subItems: [ {label: 'Wires', desc: 'Fireproof wires by Finolex'},  
                                             {label: 'Switches & Sockets', desc: 'Anchor Roma'}]},
    {step: 9, title: 'Miscellaneous', subItems: [ {label: 'Overhead Tank', desc: 'Sintex Double Layered 1000 ltrs'},  
                                             {label: 'Underground Sump', desc: '4000 litres'},
                                             {label: 'Staircase Railing', desc: 'MS Railing'}]},  
    {step: 10, title: 'Customisation Costs', subItems: []},                                                                                                                                               
  ];

  export const  basicPackageItems: IPackagesItems[] = [
    {step: 1, title: 'Designs & Drawings', subItems: [ {label: '3D Elevation', desc: ''},  {label: 'Structural Design', desc: ''}]},
    {step: 2, title: 'Structure', subItems: [ {label: 'Aggregates', desc: '20mm & 40mm'},  
                                              {label: 'RCC Design Mix', desc: 'As per the structural designer recommendation'},
                                              {label: 'Ceiling Height', desc: '10 feet (Finished Floor level to Finished Floor level)'},
                                              {label: 'Steel', desc: 'Sunvik, Meenakshi, Kamdhenu or equivalent'},
                                              {label: 'Blocks', desc: 'Standard Solid Concrete blocks. 6 inch 4 inch'},
                                              {label: 'Cement', desc: 'ACC, Birla  or equivalent of Grade - 43 or 53'}]},
    {step: 3, title: 'Kitchen', subItems: [ {label: 'Ceramic Wall Tiles, 2 feet above kitchen slab', desc: 'Upto ???50 per Sqft'},  
                                              {label: 'Main Sink Faucet', desc: 'Upto ???1500'},
                                              {label: 'Any Other Faucet & Accessories', desc: 'ISI Marked'},
                                              {label: 'Kitchen Sink', desc: 'Stainless Steel Single Sink worth ???4000'}]},    
    {step: 4, title: 'Bathroom', subItems: [ {label: 'Bathroom doors', desc: 'Waterproof flush doors'},  
                                              {label: 'Bathroom Ceramic Wall Tiles with 7 feet height', desc: 'Upto ???50 per Sqft'},
                                              {label: 'Sanitary ware & CP Fittings', desc: 'Upto ???40000 per 1000 sqft of construction.'},
                                              {label: 'CPVC Pipe', desc: 'Astral or equivalent'}]},   
    {step: 5, title: 'Doors & Windows', subItems: [ {label: 'Main Door', desc: 'Flush Door With Veneer. Sal wood frame of 5 inch by 3 inch, worth ???20000 including fixtures'},  
                                              {label: 'Internal Doors', desc: 'Membrane doors / Flush Door with Laminates upto ???8000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch'},
                                              {label: 'Windows', desc: 'Aluminium Windows with glass shutters and mesh shutters(3 track with 1 mesh)'}]},
    {step: 6, title: 'Painting', subItems: [ {label: 'Interior Painting', desc: 'JK Putty + Tractor Shyne Emulsion or equivalent'},  
                                             {label: 'Exterior Painting', desc: 'Asian Primer + Ace Exterior Emulsion Paint or equivalent'}]},
    {step: 7, title: 'Flooring', subItems: [ {label: 'Living and Dining Flooring', desc: 'Tiles of value upto ???70 per sqft'},  
                                             {label: 'Rooms and Kitchen Flooring', desc: 'Tiles upto ???60 per sqft'},
                                             {label: 'Balcony and Open Areas Flooring', desc: 'Anti-skid tiles of value upto ???50 per sqft'},
                                             {label: 'Staircase Flooring', desc: 'Sadarahalli Granite of value upto ??? 70 per sqft'},
                                             {label: 'Parking Tiles', desc: 'Anti-skid tiles of value upto ???50 per sqft'}]},
    {step: 8, title: 'Electrical', subItems: [ {label: 'Wires', desc: 'Fireproof wires by Finolex'},  
                                             {label: 'Switches & Sockets', desc: 'Anchor Roma'}]},
    {step: 9, title: 'Miscellaneous', subItems: [ {label: 'Overhead Tank', desc: 'Sintex Double Layered 1500 ltrs'},  
                                             {label: 'Underground Sump', desc: '6000 litres'},
                                             {label: 'Staircase Railing', desc: 'MS Railing'},
                                             {label: 'Window Grills', desc: 'Basic MS Grills with Enamel Paint at ???110 per sqft'}]},  
    {step: 10, title: 'Customisation Costs', subItems: []},   
  ];

  export const classicPackageItems: IPackagesItems[] = [
    {step: 1, title: 'Designs & Drawings', subItems: [ {label: '3D Elevation', desc: ''},  {label: 'Structural Design', desc: ''}]},
    {step: 2, title: 'Structure', subItems: [ {label: 'Aggregates', desc: '20mm & 40mm'},  
                                              {label: 'RCC Design Mix', desc: 'As per the structural designer recommendation'},
                                              {label: 'Ceiling Height', desc: '10 feet (Finished Floor level to Finished Floor level)'},
                                              {label: 'Steel', desc: 'JSW steel or equivalent'},
                                              {label: 'Blocks', desc: 'Standard Solid Concrete blocks. 6 inch 4 inch'},
                                              {label: 'Cement', desc: 'ACC, Birla  or equivalent of Grade - 43 or 53'}]},
    {step: 3, title: 'Kitchen', subItems: [ {label: 'Ceramic Wall Tiles, 2 feet above kitchen slab', desc: 'Upto ???60 per Sqft'},  
                                              {label: 'Main Sink Faucet', desc: 'Upto ???2000'},
                                              {label: 'Any Other Faucet & Accessories', desc: 'Jaquar/Parryware/Hindware'},
                                              {label: 'Kitchen Sink', desc: 'Stainless Steel Single Sink worth ???6000'}]},    
    {step: 4, title: 'Bathroom', subItems: [ {label: 'Bathroom doors', desc: 'Waterproof flush doors'},  
                                              {label: 'Bathroom Ceramic Wall Tiles with 7 feet height', desc: 'Upto ???60 per Sqft'},
                                              {label: 'Sanitary ware & CP Fittings', desc: 'Upto ???50000 per 1000 sqft of construction.'},
                                              {label: 'CPVC Pipe', desc: 'Ashirwad / Supreme or equivalent'}]},   
    {step: 5, title: 'Doors & Windows', subItems: [ {label: 'Main Door', desc: 'Flush Door With Veneer. Sal wood frame of 5 inch by 3 inch, worth ???30000 including fixtures'},  
                                              {label: 'Internal Doors', desc: 'Membrane doors / Flush Door with Laminates upto ???8000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch'},
                                              {label: 'Windows', desc: 'UPVC Windows with glass and mesh shutters (3 track with 1 mesh)'}]},
    {step: 6, title: 'Painting', subItems: [ {label: 'Interior Painting', desc: 'JK Putty + Tractor Shyne Emulsion or equivalent'},  
                                             {label: 'Exterior Painting', desc: 'Asian Primer + Apex Exterior Emulsion Paint or equivalent'}]},
    {step: 7, title: 'Flooring', subItems: [ {label: 'Living and Dining Flooring', desc: 'Tiles of value upto ???100 per sqft'},  
                                             {label: 'Rooms and Kitchen Flooring', desc: 'Tiles upto ???80 per sqft'},
                                             {label: 'Balcony and Open Areas Flooring', desc: 'Anti-skid tiles of value upto ???60 per sqft'},
                                             {label: 'Staircase Flooring', desc: 'Sadarahalli Granite of value upto ??? 80 per sqft'},
                                             {label: 'Parking Tiles', desc: 'Anti-skid tiles of value upto ???50 per sqft'}]},
    {step: 8, title: 'Electrical', subItems: [ {label: 'Wires', desc: 'Fireproof wires by Finolex'},  
                                             {label: 'Switches & Sockets', desc: 'Anchor Roma'}]},
    {step: 9, title: 'Miscellaneous', subItems: [ {label: 'Overhead Tank', desc: 'Sintex Double Layered 1500 ltrs'},  
                                             {label: 'Underground Sump', desc: '6000 litres'},
                                             {label: 'Staircase Railing', desc: 'MS Railing'},
                                             {label: 'Window Grills', desc: 'Basic MS Grills with Enamel Paint at ???110 per sqft'}]},  
    {step: 10, title: 'Customisation Costs', subItems: []},   
  ];

