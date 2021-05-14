import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() collapsed = false;
  @Output() sidebarClosed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
