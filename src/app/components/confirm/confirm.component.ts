import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor() { }


  @Input() header: string = 'Confirm';
  @Input() content: string = '';
  @Input() btnText: string = 'modal';

  @Input() myCallback: Function;

  callBack() {
    this.myCallback;
  }

  ngOnInit() {
  }

}
