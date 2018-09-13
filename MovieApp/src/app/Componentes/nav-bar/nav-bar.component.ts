import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../serviços/movie.service'
import {Router} from "@angular/router"
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 
  valor = new FormControl("");
  constructor(private route:Router) { }

  ngOnInit() {
  }

  buscar(){
    
    
    this.route.navigate(["buscar/"+ this.valor.value])
    

  }

}
