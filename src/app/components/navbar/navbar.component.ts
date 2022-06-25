import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dropdownOpen = false;
  dropdownClose = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropDown() {
    this.dropdownClose = !this.dropdownClose;
    this.dropdownOpen = !this.dropdownOpen;
  }

}
