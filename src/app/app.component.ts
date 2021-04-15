import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { RouterOutlet, NavigationEnd } from '@angular/router';
import { slideInAnimation } from './animations';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

const DEFAULT_TRACKING_ZONE = 'America/Los_Angeles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'Aeramic Constructions';
  images = new Array();

  @Output() userAuth = new EventEmitter();

  constructor (private spinner: NgxSpinnerService, private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
        //this.spinner.show();
    
        // this.router.events.subscribe(event => {
        //   if (event instanceof NavigationEnd) {
        //     this.gaService.sendPageView(event.urlAfterRedirects);
        //   }
        // });

        // Clear all session data
        window.onbeforeunload = function(e) {
          sessionStorage.clear();
        };
  }

  ngOnInit() {

  }

  

  preloadImages(...args: any[]):void {
    for (var i = 0; i < args.length; i++) {
      this.images[i] = new Image();
      this.images[i].src = args[i];
      console.log('loaded: ' + args[i]);
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
