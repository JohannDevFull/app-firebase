import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutSiteComponent } from './layout/layout-site/layout-site.component';
import { LayoutAppComponent } from './layout/layout-app/layout-app.component';
import { NavBarComponent } from './layout/layout-site/nav-bar/nav-bar.component';

import { LoginComponent } from './modules/auth/login/login.component';
import { NavSideComponent } from './layout/layout-app/nav-side/nav-side.component';
import { NavAppComponent } from './layout/layout-app/nav-app/nav-app.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutSiteComponent,
    LayoutAppComponent,
    NavBarComponent,

    LoginComponent,
     NavSideComponent,
     NavAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
