import { Component, OnInit , ElementRef, Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-layout-app',
  templateUrl: './layout-app.component.html',
  styleUrls: ['./layout-app.component.css']
})
export class LayoutAppComponent implements OnInit {

  show = false;
  sidebar_boolean=false;
  // clase="preloader flex-column justify-content-center align-items-center" ;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  @Input() loggendIn:boolean =false;

  @Output() salirAbuelo: EventEmitter<boolean>;

  constructor(private el: ElementRef) 
  { 
    this.salirAbuelo = new EventEmitter();
  }


  ngOnInit(): void {
    
    this.isLoggedIn=this.loggendIn;

  }

  salirPadre(): void {

    this.salirAbuelo.emit(true);
  }

}
