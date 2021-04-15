import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  date: Date;
  isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) { 
    
  }

  ngOnInit() {
    this.date = new Date();

    this.breakpointObserver
      .observe(['(max-width: 812px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = true;
        } 
        else {
          this.isMobile = false;
        }
      });
  }

}
