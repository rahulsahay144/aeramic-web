import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.scss']
})
export class HowitworksComponent implements OnInit {

  showHowItWorks: boolean = false;

  slides = [
    {img: "../../../assets/images/work1.jpeg", text: "Raise a Request", pointer: "1"},
    {img: "../../../assets/images/work2.jpeg", text: "Meet our Expert", pointer: "2"},
    {img: "../../../assets/images/work3.jpeg", text: "Book with Us", pointer: "3"},
    {img: "../../../assets/images/work1.jpeg", text: "Receive Designs", pointer: "4"},
    {img: "../../../assets/images/work2.jpeg", text: "Track & Transact", pointer: "5"},
    {img: "../../../assets/images/work3.jpeg", text: "Settle In", pointer: "6"}
  ];

  stepTitle: String = '';
  stepDescription: String = '';
  stepNum: Number = 1;
  

  slideConfig = {  
    slidesToShow: 1,  
    slidesToScroll: 1,  
    dots: false,  
    infinite: true,
    enabled: true,
    autoplay: false,
    //draggable: false,
    autoplaySpeed: 3000,
    arrows: true,
    lazyLoad: 'progressive',
    adaptiveHeight: false, 
    centerMode: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left fa-2x' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right fa-2x' aria-hidden='true'></i></button>",
  };  

  constructor() { }

  ngOnInit(): void {
    this.stepNum = 1;
    this.stepTitle = 'Raise a Request';
    this.stepDescription = 'Raise a service request or call us at XXXXXXXXXX. Our technical expert will get in touch with you.';
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
    
  breakpoint(e) {
    console.log('breakpoint');
  }
    
  afterChange(e) {
    console.log('afterChange');

    this.stepNum = e.currentSlide + 1;

    if(this.stepNum == 1) {
      this.stepTitle = 'Raise a Request';
      this.stepDescription = 'Raise a service request or call us at XXXXXXXXXX. Our technical expert will get in touch with you.';
    }
    else if(this.stepNum == 2) {
      this.stepTitle = 'Meet our Expert';
      this.stepDescription = 'Our experts visit you to take all the requirements and submit exhaustive specifications.';
    }
    else if(this.stepNum == 3) {
      this.stepTitle = 'Book with Us';
      this.stepDescription = 'Good to go. You pay 5% of the estimated project cost as Booking Amount.';
    }

  }
    
  beforeChange(e) {
    //debugger;
    console.log('beforeChange');
  }

}
