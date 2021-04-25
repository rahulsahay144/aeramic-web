import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companyintro',
  templateUrl: './companyintro.component.html',
  styleUrls: ['./companyintro.component.scss']
})
export class CompanyintroComponent implements OnInit {
  showCards: boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onCardHeaderClick (path:string) {
    this.router.navigate([path]);
  }

}
