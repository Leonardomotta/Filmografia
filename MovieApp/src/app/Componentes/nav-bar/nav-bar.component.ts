import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../serviços/movie.service'
import {Router} from "@angular/router"


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 
  valor
  constructor(private route:Router) { }

  ngOnInit() {
  }

  buscar(){
    
    console.log(this.valor)
    this.route.navigate(["buscar/{{valor}}"])
    

  }

}
