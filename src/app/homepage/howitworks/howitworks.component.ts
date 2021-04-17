import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.scss']
})
export class HowitworksComponent implements OnInit {
  slides = [
    {img: "../../../assets/images/work1.jpeg", text: "Raise a Request", pointer: "1"},
    {img: "../../../assets/images/work2.jpeg", text: "Meet our Expert", pointer: "2"},
    {img: "../../../assets/images/work3.jpeg", text: "Book with Us", pointer: "3"}
  ];

  stepDescription: String = '';
  stepNum: Number = 1;
  

  slideConfig = {  
    slidesToShow: 1,  
    slidesToScroll: 1,  
    dots: true,  
    infinite: true,
    enabled: true,
    autoplay: true,
    //draggable: false,
    autoplaySpeed: 2000,
    arrows: true,
    lazyLoad: 'progressive',
    adaptiveHeight: false, 
    centerMode: true,
    // nextArrow: "<div class='nav-btn next-slide'></div>",
    // prevArrow: "<div class='nav-btn prev-slide'></div>"
  };  

  constructor() { }
  
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
      this.stepDescription = 'Raise a service request or call us at XXXXXXXXXX. Our technical expert will get in touch with you.';
    }
    else if(this.stepNum == 2) {
      this.stepDescription = 'Our experts visit you to take all the requirements and submit exhaustive specifications.';
    }
    else if(this.stepNum == 3) {
      this.stepDescription = 'Good to go. You pay 5% of the estimated project cost as Booking Amount.';
    }

  }
    
  beforeChange(e) {
    console.log('beforeChange');
  }

  ngOnInit(): void {
  }

}
