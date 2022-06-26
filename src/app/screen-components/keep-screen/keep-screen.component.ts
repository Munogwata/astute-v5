import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keep-screen',
  templateUrl: './keep-screen.component.html',
  styleUrls: ['./keep-screen.component.scss']
})
export class KeepScreenComponent implements OnInit {

  savingsOpen = true;
  savingsClose = false;
  debtOpen = false;
  debtClose = true;


  constructor() { }

  ngOnInit(): void {
  }

  toggleSaveOpen() {
    this.savingsClose = false;
    this.savingsOpen = true;
    this.debtOpen = false;
    this.debtClose = true;
  }

  toggleSaveClose() {
    this.savingsClose = true;
    this.savingsOpen = false;
    this.debtOpen = false;
    this.debtClose = true;
  }

  toggleDebtOpen() {
    this.savingsOpen = false;
    this.savingsClose = true;
    this.debtOpen = true;
    this.debtClose = false;
  }

  toggleDebtClose() {
    this.savingsOpen = false;
    this.savingsClose = true;
    this.debtOpen = false;
    this.debtClose = true;
  }


}
