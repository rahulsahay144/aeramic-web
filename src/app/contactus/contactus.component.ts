import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  initForm = true;
  
  constructor(private titleService: Title) { 
    this.titleService.setTitle('Aeramic Constructions & Consultancy Pvt. Ltd. | Contact Us');
  }

  ngOnInit(): void {
  }

}
