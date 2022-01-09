import { Component } from '@angular/core';

import { DomSanitizer }         from '@angular/platform-browser';

import { TokenStorageService }  from './shared/services/auth/token-storage.service';
import { AuthService }          from './shared/services/auth/auth.service';
import { CookieService }        from 'ngx-cookie-service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'angular-myagenda';

  private roles: string[] = [];
  
  isLoggedIn = false;

  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService,private authService: AuthService,private cookieService: CookieService,public sanitizer: DomSanitizer) 
  {

  }

  ngOnInit(): void { 

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) 
    {
      
      const user              = this.tokenStorageService.getUser();

      user.roles=[
        {
          id:1,
          nombre_rol:"Admin"
        },
        {
          id:2,
          nombre_rol:"Guest"
        },
        {
          id:3,
          nombre_rol:"Cordinador"
        },
      ];

      this.roles              = user.roles;

      // this.showAdminBoard     = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username           = user.username;

      // const activeClassDos  = "layout-top-nav";        
      // bodyElement.classList.remove(activeClassDos);

      // nextClass       = "layout-fixed";
      // const nextClassDos    = "sidebar-mini";
      // bodyElement.classList.add(nextClass);
      // bodyElement.classList.add(nextClassDos);
      
    }
    
  }

  logout(valor:boolean): void {

    this.tokenStorageService.signOut();

    this.cookieService.delete('token_access');

    alert(this.authService.authApiJohann());

    this.isLoggedIn=false;
    
    window.location.href = "/";
  }



}
