import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-current-images',
  templateUrl: './current-images.component.html',
  styleUrls: ['./current-images.component.css']
})
export class CurrentImagesComponent implements OnInit {
  @Input() images: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
