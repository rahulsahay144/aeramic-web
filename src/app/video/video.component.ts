import { Component, OnInit, ViewChild } from '@angular/core';
import { HostListener } from "@angular/core";
import { ApiService } from '../api.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @ViewChild('player') player: any;

  videoHeight:number;
  videoWidth:number;
  videos: any = [];
  isReady: boolean;

  constructor(private apiService: ApiService, private spinner: NgxSpinnerService) { 
    //this.spinner.show();
    this.isReady = false;
    this.getScreenSize();
  }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.apiService.getProjectVideoConfiguration()
    .then(res => {
      res.forEach(video => {
          this.videos.push(video);
      });

      this.isReady = true;
    })
    .catch((err) => {
        console.log(err);
    });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
     let screenWidth = window.innerWidth;
      if(screenWidth > 1024) {
        this.videoHeight = 400;
        this.videoWidth = 550;
      }
      else if(screenWidth < 1024 && screenWidth > 900) {
        this.videoHeight = 350;
        this.videoWidth = 450;
      }
      else if(screenWidth < 900 && screenWidth > 390) {
        this.videoHeight = 250;
        this.videoWidth = 350;
      }
      else if(screenWidth < 390) {
        this.videoHeight = 180;
        this.videoWidth = 280;
      }
  }
  // Autoplay
  onReady() {
    this.player.mute();         
    //this.player.playVideo();    
  }

  // Loop
  onStateChange(event) {
    // if (event.data === 0) {
    //   this.player.playVideo();  
    // }
  }

}
