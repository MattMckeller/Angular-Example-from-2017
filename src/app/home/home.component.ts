import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private sideNavService: SideNavService,
  ) { }

  openSideNav() {
    this.sideNavService.open();
  }

  ngOnInit() {
  }

}
