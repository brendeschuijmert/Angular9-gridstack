import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';

declare var GridStack;
let dynamicWidgetId = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  grid;
  public items: {
    x?: number,
    y?: number,
    w?: number,
    h?: number
  }[] = [];

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const options = { // put in gridstack options here
      disableOneColumnMode: true, // for jfiddle small window size
      float: false
    };
    this.grid = GridStack.init(options);
  }

  addItem() {
    this.grid.addWidget({
      x: Math.round(12 * Math.random()),
      y: Math.round(5 * Math.random()),
      w: Math.round(1 + 3 * Math.random()),
      h: Math.round(1 + 3 * Math.random())
    });
  }
}
