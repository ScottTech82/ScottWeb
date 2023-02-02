import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  printCV(): void {
    window.open('/assets/J Scott -Software Engineer.pdf');
  }

  home(): void {
    this.router.navigateByUrl("/home");
  }

  ngOnInit(): void {
  }

}
