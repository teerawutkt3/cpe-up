import { Component, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit, AfterContentChecked, AfterContentInit {

  constructor() {

  }

  onclickModal() {
    console.log("onclickModal")

  }

  ngOnInit() {
   // $("#top").val("top");
    console.log("ngOnInit")
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit")
  }
}
