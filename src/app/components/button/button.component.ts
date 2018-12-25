import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() color: string = 'primary';
  @Input() size: string = 'md';
  @Input() btnText: string = 'button';
  
  ngOnInit() {
  }

}
