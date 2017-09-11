import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SideNavService} from "../side-nav.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SideNavComponent implements OnInit {
  isOpened: boolean;

  constructor(
    private sideNavService: SideNavService,
  ) { }

  toggle() {
    this.sideNavService.toggle();
  }

  ngOnInit() {
    this.sideNavService.getOpenedSubject()
      .subscribe(opened => {
        this.isOpened = opened;
      });
    this.isOpened = this.sideNavService.getIsOpened();
  }

}
