import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  @ViewChild('build', {read: ElementRef})
  public letsBuildElementRef: ElementRef;

  letsBuildElementPosition: any;
  stickyletsBuild: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.letsBuildElementPosition = this.letsBuildElementRef.nativeElement.offsetTop;
  }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(e){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.letsBuildElementPosition){
          this.stickyletsBuild = true;
      } 
      else {
          this.stickyletsBuild = false;
      }
  }

}
