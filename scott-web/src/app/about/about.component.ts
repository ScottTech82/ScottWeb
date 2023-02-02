import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  printCV(): void {
    window.open('/assets/J Scott -Software Engineer.pdf');
  }

  ngOnInit(): void {
  }

}
