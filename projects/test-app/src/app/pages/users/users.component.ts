import { Component, OnInit } from '@angular/core';
import { CoreService, Users } from '../../../../../core/src/public-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ]
})
export class UsersComponent implements OnInit {
  $users: Observable<Users>;

  constructor(private core: CoreService) {
    this.$users = core.get();
  }

  ngOnInit(): void {
  }

}
