import {Component, OnInit} from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { ApiService } from '../api.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];

  constructor(private apiService: ApiService, private spinner: NgxSpinnerService) { 
    this.spinner.show();

    this.galleryOptions = [
      {
        width: '600px',
        height: '450px',
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
        width: '400px',
        height: '400px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        arrowPrevIcon: 'fa fa-arrow-circle-left fa-1x',
        arrowNextIcon: 'fa fa-arrow-circle-right fa-1x'
      },
      // max-width 400
      {
        breakpoint: 400,
        //preview: false,
        width: '250px',
        height: '250px',
        arrowPrevIcon: 'fa fa-arrow-circle-left',
        arrowNextIcon: 'fa fa-arrow-circle-right'
      }
    ];
  }

  ngOnInit() {
    this.apiService.getProjectImageConfiguration()
    .then(res => {
      res.forEach(image => {
          this.galleryImages.push(image);
      });

      this.spinner.hide();
    })
    .catch((err) => {
        console.log(err);
        this.spinner.hide();
    });
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
