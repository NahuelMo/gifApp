import { Component, OnInit } from '@angular/core';
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import { trigger, transition, style, animate, state } from '@angular/animations'; 
import { faArrowRight, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('widthGrow', [
        state('closed', style({
          width: 65
        })),
        state('open', style({
          width: 250
        })),
        transition('* => *', animate(150))
    ]),
  ]
})
export class NavbarComponent implements OnInit {

  faArrowRight: IconDefinition = faArrowRight;
  faArrowLeft: IconProp = faArrowLeft;
  faBars: IconProp = faBars;
  openNavbar: string = 'open';

  constructor() { }
  
  ngOnInit(): void {
  }

  changeState(): void {
    (this.openNavbar == "closed") ? this.openNavbar = "open" : this.openNavbar = "closed";
  }
}
