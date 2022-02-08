import { Component } from '@angular/core';

@Component({
  selector: 'vss-ui',
  template: `
    <button type="button">
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      button {
        appearance: none;
        border: 0;
        cursor: pointer;

        width: 100%;

        line-height: 150%;
        font-size: 1.5rem;
      }
    `
  ]
})
export class UiComponent {
}
