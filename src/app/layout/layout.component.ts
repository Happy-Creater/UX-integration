import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gm-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  sidebarCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
