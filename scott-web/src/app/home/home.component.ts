import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  PRSlink(): void {
    window.open("http://joshscott82.com", '_blank');
    window.focus(); 
  }

  ngOnInit(): void {
  }

}
