import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-mainlayout-component',
  templateUrl: './mainlayout-component.component.html',
  styleUrls: ['./mainlayout-component.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class MainlayoutComponentComponent implements OnInit {

  secondPost: string = "variable passed from mainlayout";

  constructor() { }

  ngOnInit() {
  }


  handleEvent(event){
    console.log(event);
  }
}
