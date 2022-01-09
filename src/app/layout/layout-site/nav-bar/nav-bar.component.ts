import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) 
  { 

  }

  ngOnInit(): void {
  }


  activarClaseActive(): string{

    let test="";

    if( this.router.url == "/auth/login" || this.router.url == "/register")
    {
      test="nav-link dropdown-toggle active";
    }else{

      test="nav-link dropdown-toggle ";
    }

    return test;
  }

}
