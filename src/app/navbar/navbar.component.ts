import { Component } from '@angular/core';
import {  RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [  RouterLink, RouterLinkActive ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items = [
    { name:'Home',link:'home'},
    {name:'Register',link:'register'},
    {name:'order',link:'pre-order'}
  ];
}
