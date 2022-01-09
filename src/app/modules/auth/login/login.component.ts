import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';


// TAREA: crear alias directorio servicio 
import { AuthService }          from '../../../shared/services/auth/auth.service';
import { TokenStorageService }  from '../../../shared/services/auth/token-storage.service';

import { CookieService }        from 'ngx-cookie-service'; 
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isLoggedIn = false;

  form: any = {
    user_name: 'JohannDevFull',
    password: 'johann.123.321',
    remember:false
  };

  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = []; 

  @Output() cerrarSesion: EventEmitter<boolean>;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private cookieService: CookieService,private router: Router) 
  { 
    this.cerrarSesion = new EventEmitter();
  }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    if(this.isLoggedIn){
      window.location.href = "app";
    }

  } 

  onSubmit(): void { 

  const { user_name, password } = this.form;

    this.authService.login(user_name, password).subscribe(
      data => {
        
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.cookieService.set("",data.accessToken);

        // this.cookieService.set('token_access', data.token , { expires: 2, sameSite: 'Lax' });

        // this.cookieService.saveToken(data);

        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

        setTimeout(()=>{
          
          this.router.navigate(['/app'])

        },222);

        setTimeout(()=>{
          
          location.reload();

        },333);


      },
      err => {

        alert("Error auth")
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {

    window.location.reload();
  }


}
