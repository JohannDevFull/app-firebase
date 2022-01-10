import { Component, OnInit } from '@angular/core';

import  {  NgxPermissionsService  }  from  'ngx-permissions' ; 
import  {  HttpClient  }  from  '@angular/common/http' ; 

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private permissionsService: NgxPermissionsService, private http: HttpClient) 
  { 

  }

  ngOnInit(): void {

    const perm = ["ADMIN", "EDITOR"];

    this.permissionsService.loadPermissions(perm);


    
     // this.http.get('url').subscribe((permissions) => {
       //const perm = ["ADMIN", "EDITOR"]; example of permissions

       // console.log("///////////")
       // console.log(this.permissionsService)
       // console.log("///////////")

       // this.permissionsService.loadPermissions(permissions);

    // });

  }

}
