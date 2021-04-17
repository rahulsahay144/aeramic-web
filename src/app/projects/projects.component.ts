import {Component, OnInit} from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 6,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageDescription: true,
        imageSwipe: true,
        thumbnailsRemainingCount: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true,
        previewBullets: true,
        arrowPrevIcon: 'fa fa-arrow-circle-left fa-2x',
        arrowNextIcon: 'fa fa-arrow-circle-right fa-2x'
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '../../assets/images/projects/Project_1.jpeg',
        medium: '../../assets/images/projects/Project_1.jpeg',
        big: '../../assets/images/projects/Project_1.jpeg',
        description: "Some caption",
        label: "test"
      },
      {
        small: '../../assets/images/projects/Project_2.jpeg',
        medium: '../../assets/images/projects/Project_2.jpeg',
        big: '../../assets/images/projects/Project_2.jpeg',
        description: "Some caption",
        label: "test"
      },
      {
        small: '../../assets/images/projects/Project_3.jpeg',
        medium: '../../assets/images/projects/Project_3.jpeg',
        big: '../../assets/images/projects/Project_3.jpeg',
        description: "Some caption",
        label: "test"
      },{
        small: '../../assets/images/projects/Project_4.jpeg',
        medium: '../../assets/images/projects/Project_4.jpeg',
        big: '../../assets/images/projects/Project_4.jpeg',
        description: "Some caption",
        label: "test"
      },   
      {
        small: '../../assets/images/projects/Project_5.jpeg',
        medium: '../../assets/images/projects/Project_5.jpeg',
        big: '../../assets/images/projects/Project_5.jpeg',
        description: "Some caption",
        label: "test"
      },
      {
        small: '../../assets/images/projects/Project_6.jpeg',
        medium: '../../assets/images/projects/Project_6.jpeg',
        big: '../../assets/images/projects/Project_6.jpeg',
        description: "Some caption",
        label: "test"
      },
      {
        small: '../../assets/images/projects/Project_7.jpeg',
        medium: '../../assets/images/projects/Project_7.jpeg',
        big: '../../assets/images/projects/Project_7.jpeg',
        description: "Some caption",
        label: "test"
      },
      {
        small: '../../assets/images/projects/Project_8.jpeg',
        medium: '../../assets/images/projects/Project_8.jpeg',
        big: '../../assets/images/projects/Project_8.jpeg',
        description: "Some caption",
        label: "test"
      },
      {
        small: '../../assets/images/projects/Project_9.jpeg',
        medium: '../../assets/images/projects/Project_9.jpeg',
        big: '../../assets/images/projects/Project_9.jpeg',
        description: "Some caption",
        label: "test"
      },
      {
        small: '../../assets/images/projects/Project_10.jpeg',
        medium: '../../assets/images/projects/Project_10.jpeg',
        big: '../../assets/images/projects/Project_10.jpeg',
        description: "Some caption",
        label: "test"
      },
      {
        small: '../../assets/images/projects/Project_11.jpeg',
        medium: '../../assets/images/projects/Project_11.jpeg',
        big: '../../assets/images/projects/Project_11.jpeg',
        description: "Some caption",
        label: "test"
      }  
    ];
  }

  previewOpenHandler() {
    const elm = document.querySelector<HTMLElement>("app-header")!;
    elm.style.zIndex = "1";
  }

  previewCloseHandler() {
    const elm = document.querySelector<HTMLElement>("app-header")!;
    elm.style.zIndex = "2";
  }

}
