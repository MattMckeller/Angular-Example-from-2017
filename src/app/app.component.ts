import { Component } from '@angular/core';
import { SideNavService } from "./side-nav.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private sideNavService: SideNavService,
  ) { }

  toggleSideNav() {
    this.sideNavService.toggle();
  }
}
