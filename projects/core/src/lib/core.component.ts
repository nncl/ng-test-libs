import { Component } from '@angular/core';

@Component({
  selector: 'lib-core',
  template: `
    <button type="button">
      <ng-content></ng-content>

      Inner
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
export class CoreComponent {
}
