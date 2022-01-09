import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav-app',
  templateUrl: './nav-app.component.html',
  styleUrls: ['./nav-app.component.css']
})
export class NavAppComponent implements OnInit {

  @Output() salir: EventEmitter<boolean>;

  constructor() 
  { 
    
    this.salir = new EventEmitter();
  }

  ngOnInit(): void {

  }

  cerrarSesion(){

      this.salir.emit(true);
      
  }

}
