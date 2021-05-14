import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gm-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  fakeData: string[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 300; i++) {
      this.fakeData.push('Hello World!');
    }
  }

}
