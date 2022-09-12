import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styles: [`h2{
    text-align: center;
    font-size: 40px;
    position: absolute;
    top: 40%;
    bottom: 60%;
	  left: 50%;
	  transform: translate(-50%, -50%);
}`]
})
export class Page404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
