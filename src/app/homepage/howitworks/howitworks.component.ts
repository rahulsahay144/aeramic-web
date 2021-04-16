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
  }
    
  beforeChange(e) {
    console.log('beforeChange');
  }

  ngOnInit(): void {
  }

}
