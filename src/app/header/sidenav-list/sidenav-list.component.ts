import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})

export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
