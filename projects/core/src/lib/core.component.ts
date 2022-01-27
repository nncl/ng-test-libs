import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-core',
  template: `
    <button type="button">
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      button {
        width: 100%;
        line-height: 36px;
      }
    `
  ]
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
