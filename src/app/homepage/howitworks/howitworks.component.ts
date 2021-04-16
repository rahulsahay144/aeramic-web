import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.scss']
})
export class HowitworksComponent implements OnInit {
  slides = [
    {img: "../../../assets/images/work1.jpeg"},
    {img: "../../../assets/images/work2.jpeg"},
    {img: "../../../assets/images/work3.jpeg"}
  ];
  

  slideConfig = {  
    slidesToShow: 1,  
    slidesToScroll: 1,  
    dots: true,  
    infinite: true,
    enabled: true,
    autoplay: true,
    //draggable: false,
    autoplaySpeed: 1000,
    arrows: false,
    lazyLoad: 'progressive',
    adaptiveHeight: true, 
    //centerMode: true,
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
