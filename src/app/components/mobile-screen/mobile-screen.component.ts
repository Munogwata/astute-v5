import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-screen',
  templateUrl: './mobile-screen.component.html',
  styleUrls: ['./mobile-screen.component.scss']
})
export class MobileScreenComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
