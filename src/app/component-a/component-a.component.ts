import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentBComponent } from '../component-b/component-b.component';

@Component({
  selector: 'Component-A',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  value: any;
  sendingData: any;
  received: any;

  @ViewChild(ComponentBComponent) componentB;

  constructor() { }

  ngOnInit(): void {
  }

  send(): void {
    this.sendingData = this.value;
  }

  ngAfterViewChecked() {
    setTimeout(() => {
      this.received = this.componentB.sendingData
    }, 0)
  }

  invokeMe(from: string): void {
    alert("I'm a Component-A method invoked from " + from)
  }

  call(): void {
    this.componentB.invokeMe('Component-A')
  }

}
