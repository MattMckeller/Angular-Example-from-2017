import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import {SideNavService} from "../side-nav.service";


@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {

  constructor(
    private sideNavService: SideNavService
  ) { }

  openSideNav() {
    this.sideNavService.open();
  }

  toggleSideNav() {
    this.sideNavService.toggle();
  }

  ngOnInit() {
  }

}
