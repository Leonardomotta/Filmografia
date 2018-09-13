import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from "@angular/common/http"
import{RouterModule} from "@angular/router"
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MoviesOutletComponent } from './Componentes/movies-outlet/movies-outlet.component';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import {ROUTES} from "./appRoutes"
import {MovieService} from "./serviços/movie.service"
import { FilmeviewComponent } from "./Componentes/filmeview/filmeview.component"

@NgModule({
  declarations: [
    AppComponent,
    MoviesOutletComponent,
    NavBarComponent,
    FilmeviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
    
    
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
