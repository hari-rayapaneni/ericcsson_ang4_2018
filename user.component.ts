import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { UserService } from '../services/userservice';
import { User } from '../data/user';

@Component({
  selector: 'usertable',
  templateUrl: './app/user/user.component.html',
  styleUrls: ['./app/user/user.component.css']
})
export class UserComponent implements OnInit {
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'email', 'phone', 'company'];
  constructor(private userService: UserService) { }
  
  ngOnInit() {
  }
}
export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.getUser();
  }
  disconnect() {}
}