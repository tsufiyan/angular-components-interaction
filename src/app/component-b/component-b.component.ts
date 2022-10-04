import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ComponentAComponent } from '../component-a/component-a.component';

@Component({
  selector: 'Component-B',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  @Input() received: any;
  value: any;
  sendingData: any;
  @Output() emitter = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  send(): void {
    this.sendingData = this.value;
  }

  invokeMe(from: string): void {
    alert("I'm a Component-B method invoked from " + from)
  }

  call(): void {
    this.emitter.emit('Component-B')
  }

}
