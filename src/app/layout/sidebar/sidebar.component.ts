import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidebarItem } from '../../models/layout';

@Component({
  selector: 'gm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() collapsed = false;
  @Input() sideList: SidebarItem[];
  @Output() sidebarClosed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


}
