import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() collapsed = true;
  @Output() sidebarOpened = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
