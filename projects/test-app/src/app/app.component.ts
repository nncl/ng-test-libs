import { Component } from '@angular/core';
import { CoreService, Users } from '../../../core/src/public-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  $users: Observable<Users>;
  title = 'test-app';

  constructor(private core: CoreService) {
    this.$users = core.get();
  }
}
