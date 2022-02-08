import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService, Users } from 'core';

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
